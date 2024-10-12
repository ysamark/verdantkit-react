import { useFlatList } from "@components/FlatList/hooks";

import {
  ListLoaderButton,
  ListLoaderButtonWrapper,
} from "@components/FlatList/components";

export const ClientDemandPagination = () => {
  const context = useFlatList();

  const listLoaderButtonClickHandler = () => {
    const defaultItemsCountPerIteration = 30;
    const itemsCountPerIteration =
      context.props.itemsCountPerIteration || defaultItemsCountPerIteration;

    if (context.listCursor < context.props.data.length) {
      context.setListCursor(context.listCursor + itemsCountPerIteration);
    }
  };

  if (context.listCursor >= context.props.data.length) {
    return null;
  }

  return (
    <ListLoaderButtonWrapper>
      <ListLoaderButton type="button" onClick={listLoaderButtonClickHandler}>
        Ver mais
      </ListLoaderButton>
    </ListLoaderButtonWrapper>
  );
};
