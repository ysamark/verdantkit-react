import { Nullish } from "@verdantkit/utils";
import { Fragment, useEffect, useState } from "react";

import { SelectableArea } from "@components/SelectableArea";

import { SelectListContextProvider } from "./context";
import { SelectListContextDataObject, SelectListProps } from "./types";

export function SelectListContainer<ListDataType = any>(
  props: React.PropsWithChildren<SelectListProps<ListDataType>>
) {
  const [query, setQuery] = useState<Nullish<string>>(null);
  const [loading, setLoading] = useState<Nullish<boolean>>(
    typeof props.loading === "boolean" ? props.loading : false
  );

  const selectListDataObject: SelectListContextDataObject = {
    props,
    loading,
    setLoading,
    query,
    setQuery,
  };

  const isMultipleSelectList =
    typeof props.multiple === "boolean" && props.multiple;

  useEffect(() => {
    if (typeof props.loading !== "boolean") {
      return;
    }

    if (!props.loading && typeof props.onLoadEnd === "function") {
      props.onLoadEnd();
    }

    setLoading(props.loading);
  }, [props, props.loading, props.onLoadEnd]);

  const FlatListWrapper = isMultipleSelectList ? SelectableArea : Fragment;

  return (
    <SelectListContextProvider value={selectListDataObject}>
      <FlatListWrapper>{props.children}</FlatListWrapper>
    </SelectListContextProvider>
  );
}
