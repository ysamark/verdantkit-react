import { Nullish } from "@verdantkit/utils";

import { forwardRef } from "react";
import { cn } from "~/utils";
import { CursorStyle } from "./types";

export type SelectCursorProps = React.PropsWithRef<
  React.HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: Nullish<string>;
    borderColor?: Nullish<string>;
    cursorStyle?: Nullish<CursorStyle>;
  }
>;

export const SelectCursor = forwardRef<HTMLDivElement, SelectCursorProps>(
  function SelectCursor(props, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          props.className,
          "bg-primary-600 bg-opacity-35 border-solid border-[1px] border-primary-300 fixed z-[555]",
          props.cursorStyle === "radial" ? "rounded-full" : "rounded-sm"
        )}
      />
    );
  }
);
