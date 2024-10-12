import { noEmpty } from "@verdantkit/utils";
import { Fragment, useId } from "react";
import { FaAngleRight, FaCheck } from "react-icons/fa6";

import { useSelectList } from "@components/SelectList/hooks";
import { SelectListItemProps } from "@components/SelectList/types";
import { useSelectable } from "@components/SelectableElement";
import { cn } from "~/utils";

function SelectListItemContent<ListDataType = any>({
  children,
  ...props
}: React.PropsWithChildren<SelectListItemProps<ListDataType>>) {
  return (
    <Fragment>
      {children}
      <div className="w-full inline-flex items-center">
        <strong className="w-full block text-left">{props.title}</strong>
      </div>
      {noEmpty(props.subTitle) && (
        <div className="w-full inline-flex justify-end items-center">
          <span className="dark:text-zinc-400 w-full block text-right">
            {props.subTitle}
          </span>
        </div>
      )}
      <i className="inline-flex">
        <FaAngleRight />
      </i>
    </Fragment>
  );
}

export function SelectListItem<ListDataType = any>(
  listItem: SelectListItemProps<ListDataType>
) {
  const fieldId = useId();
  const context = useSelectList();
  const selectable = useSelectable();

  const buttonClickHandler: React.MouseEventHandler = (event) => {
    event.preventDefault();

    if (
      typeof context.props.onSelect === "function" &&
      !context.props.multiple
    ) {
      context.props.onSelect(listItem.data);
    }
  };

  const isMultipleSelectList =
    typeof context.props.multiple === "boolean" && context.props.multiple;

  if (!isMultipleSelectList) {
    return (
      <button
        type="button"
        onClick={buttonClickHandler}
        className="bg-zinc-200 hover:bg-zinc-300 dark:text-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 w-full h-auto flex flex-row items-center text-sm rounded-md border-0 outline-0 p-3 gap-2"
      >
        <SelectListItemContent {...listItem} />
      </button>
    );
  }

  return (
    <label
      className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:text-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-800 w-full h-auto flex flex-row items-center text-sm rounded-md border-0 outline-0 p-3 gap-2 cursor-pointer select-none [&_*]:select-none"
      htmlFor={fieldId}
    >
      <SelectListItemContent {...listItem}>
        <div className="size-6 inline-flex">
          <div
            className={cn(
              "size-6 rounded-full border-[1px] flex flex-row justify-center items-center border-solid border-zinc-400 dark:border-zinc-600",
              selectable.selected
                ? "bg-blue-500 text-zinc-50 dark:text-inherit shadow-sm"
                : null
            )}
          >
            {selectable.selected && <FaCheck size={12} />}
            <input {...selectable.inputProps} id={fieldId} className="hidden" />
          </div>
        </div>
      </SelectListItemContent>
    </label>
  );
}
