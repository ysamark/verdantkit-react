import { Nullish } from "@verdantkit/utils";
import { useEffect, useState } from "react";

import {
  FlatListContextDataObject,
  FlatListProps,
} from "@components/FlatList/types";

export const useFlatListContextDataObject = <Data = any>(
  props: FlatListProps<Data>
): FlatListContextDataObject => {
  const [query, setQuery] = useState<Nullish<string>>();
  const [listCursor, setListCursor] = useState<number>(0);
  const [data, setData] = useState<Array<Data>>(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return {
    data,
    listCursor,
    props,
    query,
    setData,
    setListCursor,
    setQuery,
  };
};
