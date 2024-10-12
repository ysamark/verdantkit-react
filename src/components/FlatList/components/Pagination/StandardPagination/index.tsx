import { range } from "@verdantkit/utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { ListPaginationButton } from "@components/FlatList/components/ListPaginationButton";
import { useFlatList, useFlatListConfig } from "@components/FlatList/hooks";

export const StandardPagination = () => {
  const context = useFlatList();
  const config = useFlatListConfig();

  const maxPaginationButtons = 7;
  const paginationButtonsCountDivisor =
    config.itemsCountPerIteration >= 1 ? config.itemsCountPerIteration : 1;
  const paginationButtonsCount = Math.ceil(
    context.props.data.length / paginationButtonsCountDivisor
  );

  const finalPaginationButtonsCount =
    paginationButtonsCount >= maxPaginationButtons
      ? maxPaginationButtons
      : paginationButtonsCount;

  const paginationButtonsCountPerSide = Math.floor(
    finalPaginationButtonsCount / 2
  );

  const resolveCurrentPaginationIteration = () => {
    return 1 + context.listCursor / config.itemsCountPerIteration;
  };

  const currentPaginationIteration = resolveCurrentPaginationIteration();

  const paginationButtonsSliceStart =
    currentPaginationIteration >= paginationButtonsCountPerSide + 1
      ? currentPaginationIteration - (paginationButtonsCountPerSide + 1)
      : 0;
  const paginationButtonsSliceEnd =
    currentPaginationIteration +
    paginationButtonsCountPerSide * (currentPaginationIteration <= 1 ? 2 : 1);

  const listCursor = context.listCursor;

  const paginationHomeButtonClickHandler = () => {
    context.setListCursor(0);
  };

  const paginationEndButtonClickHandler = () => {
    context.setListCursor(
      paginationButtonsCount * config.itemsCountPerIteration - 1
    );
  };

  const paginationNextButtonClickHandler = () => {
    if (listCursor < context.props.data.length) {
      context.setListCursor(listCursor + config.itemsCountPerIteration);
    }
  };

  const paginationPrevButtonClickHandler = () => {
    if (listCursor > 0) {
      context.setListCursor(listCursor - config.itemsCountPerIteration);
    }
  };

  return (
    <ul className="w-full flex flex-row gap-[5px] justify-center items-center p-8 flex-wrap [&_li]:flex">
      <li>
        <ListPaginationButton
          onClick={paginationHomeButtonClickHandler}
          disabled={listCursor <= 0}
          className="disabled:opacity-65 disabled:cursor-not-allowed"
        >
          <span>Início</span>
        </ListPaginationButton>
      </li>
      <li>
        <ListPaginationButton
          onClick={paginationPrevButtonClickHandler}
          disabled={listCursor <= 0}
          className="py-3 disabled:opacity-65 disabled:cursor-not-allowed"
        >
          <FaAngleLeft />
        </ListPaginationButton>
      </li>
      {range(1, paginationButtonsCount)
        .slice(paginationButtonsSliceStart, paginationButtonsSliceEnd)
        .map((i) => (
          <li key={i}>
            <ListPaginationButton
              onClick={() => {
                context.setListCursor(config.itemsCountPerIteration * (i - 1));
              }}
              selected={Math.floor(currentPaginationIteration) === i}
            >
              <span>{i}</span>
            </ListPaginationButton>
          </li>
        ))}
      <li>
        <ListPaginationButton
          onClick={paginationNextButtonClickHandler}
          disabled={listCursor >= context.props.data.length}
          className="py-3 disabled:opacity-65 disabled:cursor-not-allowed"
        >
          <FaAngleRight />
        </ListPaginationButton>
      </li>
      <li>
        <ListPaginationButton
          onClick={paginationEndButtonClickHandler}
          disabled={listCursor >= context.props.data.length}
          className="disabled:opacity-65 disabled:cursor-not-allowed"
        >
          <span>Fim</span>
        </ListPaginationButton>
      </li>
    </ul>
  );
};
