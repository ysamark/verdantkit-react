import { useEffect } from "react";

import { useFlatList, useFlatListConfig } from "@components/FlatList/hooks";

export const InfiniteScrollPagination = () => {
  const context = useFlatList();
  const config = useFlatListConfig();

  useEffect(() => {
    const windowScrollHandler = () => {
      if (
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight
      ) {
        context.setListCursor(
          context.listCursor + config.itemsCountPerIteration
        );
      }
    };

    window.addEventListener("scroll", windowScrollHandler);

    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  });

  return <div />;
};
