import { useFlatList } from "./useFlatList";

export const useFlatListConfig = () => {
  const context = useFlatList();

  const defaultItemsCountPerIteration = 30;
  const itemsCountPerIteration =
    context.props.itemsCountPerIteration || defaultItemsCountPerIteration;
  const defaultPlaceholderCountOnLoading = 30;
  const placeholderCountOnLoading =
    context.props.placeholderCountOnLoading || defaultPlaceholderCountOnLoading;

  return {
    itemsCountPerIteration,
    placeholderCountOnLoading,
  };
};
