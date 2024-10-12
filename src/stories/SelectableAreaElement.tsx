import { useId } from "react";

import {
  SelectableAreaContainer,
  SelectableElement,
  useSelectable,
  useSelectableArea,
} from "@components/SelectableArea";
import { CursorStyle } from "~/components/SelectableAreaContainer/SelectCursor/types";
import { cn } from "~/utils";

const Card = () => {
  const selectable = useSelectable();

  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex flex-grow cursor-pointer hover:scale-105 active:scale-95 transition-transform flex-row gap-3 basis-1/3 bg-zinc-200 dark:bg-zinc-800 rounded-md border-1 border-solid border-zinc-300 dark:border-zinc-700 px-5 py-7",
        selectable.selected ? "bg-emerald-600 border-emerald-800" : null
      )}
    >
      <input {...selectable.inputProps} id={id} />
      <span className="select-none">AA</span>
    </label>
  );
};

type SelectableAreaElementProps = {
  cursorStyle?: CursorStyle;
};

export const SelectableAreaElement = (props: SelectableAreaElementProps) => {
  const selectableArea = useSelectableArea();

  return (
    <SelectableAreaContainer
      cursorStyle={props.cursorStyle}
      className="w-full flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900 p-5 rounded-md"
    >
      <div>Selected elements - {selectableArea.selectedElements.length}</div>
      <div className="w-full py-6 flex box-border flex-row flex-wrap gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <SelectableElement id={i} key={i}>
            <Card />
          </SelectableElement>
        ))}
      </div>
    </SelectableAreaContainer>
  );
};
