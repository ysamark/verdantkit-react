import { range } from "@verdantkit/utils";
import { Fragment } from "react";

import { useFlatList } from "@components/FlatList/hooks";
import { Spinner } from "@components/Spinner";

export const LoadingListFallback = () => {
  const context = useFlatList();

  if (!context.props.loading) {
    return null;
  }

  const defaultPlaceholderCountOnLoading = 30;
  const placeholderCountOnLoading =
    context.props.placeholderCountOnLoading || defaultPlaceholderCountOnLoading;

  const renderItemsPlaceholder = context.props.renderItemPlaceholder;

  if (typeof renderItemsPlaceholder !== "function") {
    return (
      <div className="w-full h-auto flex flex-row p-32 justify-center">
        <Spinner className="size-6 md:size-14" />
      </div>
    );
  }

  return range(0, placeholderCountOnLoading).map((listItemData) => (
    <Fragment key={listItemData}>{renderItemsPlaceholder()}</Fragment>
  ));
};
