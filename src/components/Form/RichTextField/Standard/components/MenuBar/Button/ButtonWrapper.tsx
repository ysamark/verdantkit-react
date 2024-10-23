import { noEmpty } from "@verdantkit/utils";
import { Fragment } from "react";
import * as Icon from "react-icons/fa6";

import { DialogButton } from "@components/DialogButton";
import {
  DropDown,
  DropDownButton,
  DropDownContent,
} from "@components/DropDown";
import { ButtonDropDownIcon } from "@components/Form/RichTextField/Standard/components/ButtonDropDownIcon";

import { ButtonProps } from "./types";

type ButtonWrapperProps = React.PropsWithChildren<
  ButtonProps &
    Partial<{
      dropDownContent: React.ReactNode;
    }>
>;

type ButtonWrapperComponent = React.FunctionComponent<ButtonWrapperProps>;

export const ButtonWrapper: ButtonWrapperComponent = ({
  icon,
  label,
  dropdown,
  dropdownStyle,
  ...props
}) => {
  const isDropdown = Boolean(typeof dropdown === "boolean" && dropdown);
  const EditorMenuButtonIcon = Icon[icon || "Fa0"];

  if (!isDropdown) {
    return <Fragment>{props.children}</Fragment>;
  }

  if (dropdownStyle === "dialog") {
    return (
      <DialogButton content={() => props.children} asChild>
        {props.dropDownContent}
      </DialogButton>
    );
  }

  return (
    <DropDown>
      <DropDownButton
        type="button"
        role="button"
        className="bg-transparent border-0 outline-0 text-zinc-800 dark:text-zinc-100 flex flex-row gap-1 items-center pt-[3px] pb-0.5 px-2 rounded-md h-8 relative [&.x-active]:bg-zinc-200 dark:[&.x-active]:bg-zinc-800 enabled:hover:bg-zinc-200 enabled:active:bg-zinc-300 dark:enabled:hover:bg-zinc-700 dark:enabled:active:bg-zinc-600"
      >
        {icon && (
          <i className="inline-flex text-sm">
            <EditorMenuButtonIcon />
          </i>
        )}
        {noEmpty(label) && (
          <div className="w-full inline-flex mt-[1px]">
            <span className="text-nowrap text-sm">{label}</span>
          </div>
        )}
        <ButtonDropDownIcon />
      </DropDownButton>
      <DropDownContent
        className="bg-white shadow-xl dark:bg-zinc-900 border-[1px] border-solid border-zinc-300 dark:border-zinc-800 w-max p-3 rounded-md flex flex-row gap-2"
        style={{ minWidth: `max-content` }}
      >
        {props.dropDownContent}
      </DropDownContent>
    </DropDown>
  );
};
