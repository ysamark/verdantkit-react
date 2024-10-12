"use client";

import { useId, useState } from "react";

import { cn } from "~/utils";

type LongTextFieldProps = {
  label?: string;
};

type LongTextFieldComponent = React.FunctionComponent<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & LongTextFieldProps
>;

export const LongTextField: LongTextFieldComponent = (props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [removeFocusOnTextAreaBlur, setRemoveFocusOnTextAreaBlur] =
    useState<boolean>(true);

  const fieldId = useId();

  const labeled = Boolean(
    typeof props.label === "string" && /\S/.test(props.label)
  );

  const textAreaFocusHandler = () => {
    setFocus(true);
  };

  const textAreaBlurHandler = (event: React.FocusEvent) => {
    if (removeFocusOnTextAreaBlur) {
      return setFocus(false);
    }

    (event.target as HTMLTextAreaElement).focus();
  };

  const containerMouseEnterHandler = () => {
    setRemoveFocusOnTextAreaBlur(false);
  };

  const containerMouseLeaveHandler = () => {
    setRemoveFocusOnTextAreaBlur(true);
  };

  return (
    <label
      className={cn(
        "w-full cursor-text [&_*]:cursor-text rounded-sm block p-3 border-[1px] border-solid mb-4 transition-all",
        "bg-zinc-50 dark:bg-zinc-800 dark:[&_*]:text-zinc-50 dark:border-zinc-600",
        focus
          ? "shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] border-[#86b7fe]"
          : "border-zinc-300"
      )}
      htmlFor={fieldId}
      onMouseEnter={containerMouseEnterHandler}
      onMouseLeave={containerMouseLeaveHandler}
    >
      <div className="w-full block">
        {labeled && (
          <div className="w-full pb-2 block">
            <span className="w-full block pointer-events-none">
              {props.label}
            </span>
          </div>
        )}
        <div className="w-full block">
          <textarea
            {...props}
            id={fieldId}
            className="w-full border-0 outline-0 bg-transparent text-[16px] overflow-hidden resize-none"
            onFocus={textAreaFocusHandler}
            onBlur={textAreaBlurHandler}
          />
        </div>
      </div>
    </label>
  );
};
