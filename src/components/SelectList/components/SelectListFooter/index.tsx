import { useEffect, useRef } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

import { useSelectList } from "@components/SelectList/hooks";
import { useSelectableArea } from "@components/SelectableArea";

import { updatedFloatingFooterState } from "./utils/updatedFloatingFooterState";

export const SelectListFooter = () => {
  const context = useSelectList();
  const selectableArea = useSelectableArea();

  const footerElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const effectHandler = () => {
      updatedFloatingFooterState(footerElementRef.current);
    };

    window.addEventListener("resize", effectHandler);
    window.addEventListener("scroll", effectHandler);

    effectHandler();

    return () => {
      window.removeEventListener("resize", effectHandler);
      window.removeEventListener("scroll", effectHandler);
    };
  }, []);

  const listData = context.props.data.map((item) => context.props.map(item));

  const selectAllButtonClickHandler = () => {
    const productIds = listData.map((listItem) => listItem.id);

    if (areAllSelected) {
      return selectableArea.deselectElements(productIds);
    }

    selectableArea.selectElements(productIds);
  };

  const selectButtonClickHandler: React.MouseEventHandler = (event) => {
    event.preventDefault();

    if (
      typeof context.props.onSelect === "function" &&
      context.props.multiple
    ) {
      context.props.onSelect(
        listData.filter((listItem) =>
          selectableArea.isElementSelected(listItem.id)
        )
      );
    }
  };

  const areAllSelected = !listData.some(
    (listItem) => !selectableArea.isElementSelected(listItem.id)
  );

  return (
    <div
      className="w-full bg-zinc-50 shadow-lg border-[1px] border-solid border-zinc-300 dark:border-[#32323a] dark:bg-[#1f1f1f] p-3 rounded-md flex flex-row gap-3 justify-between items-center fixed z-20"
      ref={footerElementRef}
    >
      <span>Selecionados: {selectableArea.selectedElements.length}</span>
      <div className="flex flex-row gap-3">
        <button
          type="button"
          className="px-3 py-2 rounded-lg border-0 outline-none bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-950 dark:active:bg-black text-zinc-50"
          title="Selecionar todos"
          onClick={selectAllButtonClickHandler}
        >
          {areAllSelected ? <LuCopy /> : <LuCopyCheck />}
        </button>
        <button
          type="button"
          className="px-6 py-2 rounded-lg border-0 outline-none bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-zinc-50"
          onClick={selectButtonClickHandler}
        >
          Selecionar
        </button>
      </div>
    </div>
  );
};
