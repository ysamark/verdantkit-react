import { Nullish } from "@verdantkit/utils";

import { FlatListPaginationStyle } from "@components/FlatList";

export type SelectListProps<ListDataType = any> = {
  data: Array<ListDataType>;
  loading?: boolean;
  multiple?: boolean;
  listPaginationStyle?: Nullish<FlatListPaginationStyle>;
  onLoadEnd?: () => void;
  map: (dataItem: ListDataType) => SelectListItemProps;
  onSelect?: (
    selectedItem: ListDataType | Array<ListDataType>
  ) => void | Promise<void>;
};

export type SelectListItemProps<ListDataType = any> = {
  id: string | number;
  title: string;
  subTitle?: string;
  data: ListDataType;
};

export type SelectListComponent<ListDataType = any> = React.FunctionComponent<
  SelectListProps<ListDataType>
>;

export type SelectListContextDataObject<ListDataType = any> = {
  query: Nullish<string>;
  props: SelectListProps<ListDataType>;
  setQuery: React.Dispatch<React.SetStateAction<Nullish<string>>>;
  loading: Nullish<boolean>;
  setLoading: React.Dispatch<React.SetStateAction<Nullish<boolean>>>;
};
