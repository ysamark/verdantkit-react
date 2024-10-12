import { useFlatList } from "@components/FlatList/hooks";

import { ClientDemandPagination } from "./ClientDemandPagination";
import { InfiniteScrollPagination } from "./InfiniteScrollPagination";
import { StandardPagination } from "./StandardPagination";

export const Pagination = () => {
  const context = useFlatList();

  const paginationStyle = context.props.paginationStyle || "standard";

  switch (paginationStyle) {
    case "client-demand":
      return <ClientDemandPagination />;

    case "infinite-scroll":
      return <InfiniteScrollPagination />;

    default:
      return <StandardPagination />;
  }
};
