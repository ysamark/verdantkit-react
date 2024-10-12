import { useRef } from "react";

import { useSelectField } from "@components/Form/SelectField/hooks";
import { cn } from "~/lib/utils";

type SelectFieldElementContainerProps = React.PropsWithChildren;

type SelectFieldElementContainerComponent =
  React.FunctionComponent<SelectFieldElementContainerProps>;

export const SelectFieldElementContainer: SelectFieldElementContainerComponent =
  (props) => {
    const context = useSelectField();
    const selectFieldContainerRef = useRef<HTMLDivElement>(null);

    const selectFieldContainerClickHandler: React.MouseEventHandler = () => {
      if (context.typing) {
        return;
      }

      const listData = context.listDataStack[-1 + context.listDataStack.length];

      if (listData.length < 1 && !context.opened) {
        return;
      }

      context.setOpened(!context.opened);

      if (selectFieldContainerRef.current) {
        selectFieldContainerRef.current.tabIndex = Math.random();
        selectFieldContainerRef.current.focus();
      }
    };

    const selectFieldContainerBlurHandler = () => {
      if (context.typing) {
        return;
      }

      if (context.closeOnSelectFieldContainerBlurState.current) {
        return context.setOpened(false);
      }

      if (context.opened && selectFieldContainerRef.current) {
        selectFieldContainerRef.current.focus();
      }
    };

    const selectFieldContainerKeyDownHandler: React.KeyboardEventHandler = (
      event
    ) => {
      if (event.key.length < 2) {
        context.setTyping(true);
      }

      if (event.key.toLowerCase() === "escape") {
        context.resetState();
      }
    };

    return (
      <div
        ref={selectFieldContainerRef}
        onKeyDown={selectFieldContainerKeyDownHandler}
        onBlur={selectFieldContainerBlurHandler}
        onClick={selectFieldContainerClickHandler}
        className={cn(
          "w-full rounded-md block py-[18px] px-3 border-[1px] border-solid cursor-pointer select-none [&_*]:cursor-pointer [&_*]:select-none outline-none",
          "bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600",
          !context.opened
            ? " hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
            : ""
        )}
      >
        {props.children}
      </div>
    );
  };
