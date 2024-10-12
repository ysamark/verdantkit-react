import {
  useFlatList,
  useFlatListData,
  useFlatListHTMLAttributes,
} from "@components/FlatList/hooks";

import { FlatListItem } from "./FlatListItem";

export const ListBody = () => {
  const context = useFlatList();
  const data = useFlatListData();
  const flatListHtmlAttributes = useFlatListHTMLAttributes();

  if (context.props.loading) {
    return null;
  }

  return (
    <div {...flatListHtmlAttributes}>
      {data.map((listItemData, listItemDataIndex) => (
        <FlatListItem data={listItemData} key={listItemDataIndex} />
      ))}
    </div>
  );
};
