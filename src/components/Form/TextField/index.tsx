import { noEmpty } from "@verdantkit/utils";
import { forwardRef } from "react";

import { cn } from "@lib/utils";

import { TextFieldProps } from "./types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props, ref) {
    return (
      <div className="relative">
        <input
          type="text"
          {...props}
          ref={ref}
          placeholder={props.label ?? ""}
          className={cn(
            "py-4 px-3 h-14 min-h-14 appearance-none bg-clip-padding block text-base font-normal transition-all outline-none border-[1px] border-solid border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 duration-150 ease-in-out w-full rounded-md placeholder-transparent data-floating-label-input-element focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] focus:border-[#86b7fe]",
            props.className
          )}
        />
        {noEmpty(props.label) && (
          <label
            className={cn(
              "pointer-events-none select-none h-full left-3 overflow-hidden py-4 absolute text-left text-ellipsis top-0 origin-top-left transition-all duration-100 ease-in-out whitespace-nowrap z-2"
            )}
          >
            {props.label}
          </label>
        )}
      </div>
    );
  }
);
