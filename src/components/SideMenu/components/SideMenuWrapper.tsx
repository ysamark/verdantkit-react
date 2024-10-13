import { Fragment } from "react";

import { getReactElement } from "~/utils";

import { SideMenuButton } from "./SideMenuButton";
import { SideMenuContent } from "./SideMenuContent";

export const SideMenuWrapper = (props: React.PropsWithChildren) => {
  const Button = getReactElement(props.children, SideMenuButton);
  const Content = getReactElement(props.children, SideMenuContent);

  return (
    <Fragment>
      {Button}
      {Content}
    </Fragment>
  );
};
