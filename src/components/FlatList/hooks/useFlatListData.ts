import { noEmpty } from "@verdantkit/utils";

import { listItemDataFilter } from "@components/FlatList/utils";

import { useFlatList } from "./useFlatList";
import { useFlatListConfig } from "./useFlatListConfig";

export const useFlatListData = () => {
  const context = useFlatList();
  const config = useFlatListConfig();

  if (!context) {
    throw new Error(
      "Error: useFlatListData hook can only be used inside a FlatListContextProvider"
    );
  }

  const dataSliceLimit = noEmpty(context.query)
    ? context.data.length
    : config.itemsCountPerIteration + context.listCursor;

  const query = context.query;

  const listData = context.data.slice(0, dataSliceLimit).filter((item) => {
    if (!noEmpty(query)) {
      return true;
    }

    return listItemDataFilter(item, query);
  });

  return listData;
};
