import { generateRandomId, noEmpty } from "@verdantkit/utils";
import { FaCheck } from "react-icons/fa6";

import { cn } from "@lib/utils";

import { CheckBoxProps } from "./types";
import { resolveCheckBoxSizes, resolveInputType } from "./utils";

type CheckBoxComponent = React.FunctionComponent<CheckBoxProps>;

export const CheckBox: CheckBoxComponent = (props) => {
  const fieldId = noEmpty(props.id) ? props.id : generateRandomId();

  const { width, height } = resolveCheckBoxSizes(props.size);

  return (
    <label
      className="inline-flex flex-row gap-3 items-center cursor-pointer"
      htmlFor={fieldId}
    >
      <div
        className={cn(
          "flex bg-zinc-50 border-solid border-[1px] border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:border-zinc-800 active:scale-105 transition-transform cursor-pointer select-none",
          props.type === "radio" ? "rounded-full" : "rounded-md"
        )}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <input
          {...props}
          type={resolveInputType(props.type)}
          id={fieldId}
          className={cn(
            props.className,
            "hidden invisible [&_~_i]:checked:flex [&_~_i]:checked:bg-primary-200 [&_~_i]:checked:text-zinc-50"
          )}
        />
        <i className="flex pointer-events-none size-full flex-row justify-center items-center rounded-[inherit]">
          <FaCheck size={width < 18 ? 8 : undefined} />
        </i>
      </div>
      {noEmpty(props.label) && (
        <span className="text-inherit select-none">{props.label}</span>
      )}
    </label>
  );
};
