import { Nullish } from "@verdantkit/utils";

export type FlatListItemElement = "entity-card";
export type FlatListPaginationStyle =
  | "standard"
  | "infinite-scroll"
  | "client-demand";

export type FlatListProps<Data = any> = React.PropsWithRef<
  React.HTMLAttributes<HTMLDivElement> &
    React.PropsWithChildren<{
      data: Array<Data>;
      loading?: boolean;
      placeholderCountOnLoading?: number;
      itemsCountPerIteration?: number;
      paginationStyle?: FlatListPaginationStyle;
      renderItem?: (data: Data) => React.ReactNode;
      renderItemPlaceholder?: () => React.ReactNode;
      showSearchBox?: boolean;
      title?: string;
      // listItemElement?: FlatListItemElement
    }>
>;

export type FlatListContextDataObject<Data = any> = {
  props: FlatListProps<Data>;
  query?: Nullish<string>;
  setQuery: React.Dispatch<React.SetStateAction<Nullish<string>>>;
  listCursor: number;
  setListCursor: React.Dispatch<React.SetStateAction<number>>;
  data: Array<Data>;
  setData: React.Dispatch<React.SetStateAction<Array<Data>>>;
};
