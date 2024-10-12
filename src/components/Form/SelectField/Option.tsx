import React from "react";

import { Icon } from "@components/Icon";

import { cn } from "~/utils";
import { OptionProps } from "./types";

type OptionComponent = React.FunctionComponent<
  React.PropsWithChildren & OptionProps
>;

export const Option: OptionComponent = (props) => {
  const hasChildren = Boolean(
    props.options instanceof Array && props.options.length >= 1
  );

  const optionButtonClickHandler: React.MouseEventHandler = (event) => {
    event.preventDefault();

    if (typeof props.onSelect === "function") {
      props.onSelect(props);
    }
  };

  const optionScreenButtonClickHandler: React.MouseEventHandler = (event) => {
    event.preventDefault();

    if (typeof props.onOpen === "function") {
      props.onOpen(props);
    }
  };

  return (
    <div className="w-full h-auto block relative">
      <button
        type="button"
        role="button"
        title={props.label}
        onClick={optionButtonClickHandler}
        className={cn(
          "w-full h-auto p-3 border-0 outline-0 bg-transparent text-left hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 dark:text-zinc-50",
          props.selected ? "bg-zinc-200 dark:bg-zinc-700" : null
        )}
      >
        <div className="w-full flex flex-row items-center gap-2">
          {props.icon && (
            <div className="inline-flex">
              <div>
                <Icon name={props.icon} />
              </div>
            </div>
          )}
          <div className="w-full">
            <span className="inline-flex items-center">{props.label}</span>
          </div>
        </div>
      </button>
      {hasChildren && (
        <div className="inline-flex items-center justify-end">
          <button
            type="button"
            role="button"
            onClick={optionScreenButtonClickHandler}
            className="flex flex-row gap-2 items-center justify-end bg-transparent outline-0 border-0 absolute right-3 top-[3px] pt-2 px-4 pb-[11px] rounded-md dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
          >
            <div className="inline-flex">
              <span>Entrar Aqui</span>
            </div>
            <div className="inline-flex items-center">
              <div>
                <Icon name="FaAngleRight" />
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
