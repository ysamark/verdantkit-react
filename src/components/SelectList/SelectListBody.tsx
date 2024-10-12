import { Fragment } from "react";

import { FlatList } from "@components/FlatList";
import {
  SelectableElement,
  useSelectableArea,
} from "@components/SelectableArea";

import { SelectListFooter } from "./components/SelectListFooter";
import { SelectListItem } from "./components/SelectListItem";
import { useSelectList } from "./hooks";
import { listFilter } from "./utils";

export const SelectListBody = () => {
  const context = useSelectList();
  const selectableArea = useSelectableArea();

  const isMultipleSelectList =
    typeof context.props.multiple === "boolean" && context.props.multiple;
  const listData = context.props.data.map((item) => {
    return context.props.map(item);
  });

  return (
    <Fragment>
      <FlatList
        data={listData.filter((listItem) =>
          listFilter(listItem, context.query)
        )}
        loading={Boolean(context.loading)}
        paginationStyle={context.props.listPaginationStyle || "client-demand"}
        itemsCountPerIteration={20}
        showSearchBox={false}
        className="flex w-full flex-col gap-2"
        renderItem={(listItem) => {
          if (!isMultipleSelectList) {
            return <SelectListItem {...listItem} />;
          }

          return (
            <SelectableElement id={listItem.id}>
              <SelectListItem {...listItem} />
            </SelectableElement>
          );
        }}
      />
      {selectableArea.selectedElements &&
        selectableArea.selectedElements.length >= 1 && (
          <div className="w-full block mt-2 h-12">
            <SelectListFooter />
          </div>
        )}
    </Fragment>
  );
};
