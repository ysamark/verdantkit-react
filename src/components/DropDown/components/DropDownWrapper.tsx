import { Fragment } from "react";

import { useDropDown } from "@components/DropDown/hooks";
import { getReactElement } from "~/utils";

import { DropDownButton } from "./DropDownButton";
import { DropDownContent } from "./DropDownContent";

export const DropDownWrapper = () => {
  const context = useDropDown();

  const dropDownButton = getReactElement(
    context.props.children,
    DropDownButton
  );
  const dropDownContent = getReactElement(
    context.props.children,
    DropDownContent
  );

  return (
    <Fragment>
      {dropDownButton}
      {dropDownContent}
    </Fragment>
  );
};
