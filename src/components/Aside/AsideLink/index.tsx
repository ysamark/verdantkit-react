import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import * as Icons from "react-icons/fa6";

import { FontAwesome6IconName } from "~/types";

type AsideLinkProps = {
  icon?: FontAwesome6IconName;
  showSubList?: boolean;
  href?: string;
  label: string;
};

type ButtonElementProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement>
>;

type AsideLinkComponent = FunctionComponent<PropsWithChildren & AsideLinkProps>;

export const AsideLink: AsideLinkComponent = (props) => {
  const [colapse, setColapse] = useState<boolean>(props.showSubList || true);
  const [icon, setIcon] = useState<FontAwesome6IconName>(
    props.icon || "FaAngleRight"
  );

  const Icon = Icons[icon] || React.Fragment;

  const LinkElement: FunctionComponent<ButtonElementProps> = ({
    children,
    ...rest
  }) => (
    <a {...rest} href={props.href || "#"}>
      {children}
    </a>
  );

  const ButtonElement: FunctionComponent<ButtonElementProps> = (props) => (
    <button
      {...props}
      type="button"
      role="button"
      onClick={buttonClickHandler}
    />
  );

  function buttonClickHandler() {
    setColapse(!colapse);

    if (!props.icon) {
      setIcon(icon === "FaAngleRight" ? "FaAngleDown" : "FaAngleRight");
    }
  }

  const LinkWrapper = props.children ? ButtonElement : LinkElement;

  return (
    <div className="w-full flex flex-col mb-2">
      <LinkWrapper className="hover:bg-zinc-200 active:bg-zinc-300 dark:active:bg-zinc-800 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-200 flex w-full flex-row border-0 outline-0 bg-transparent rounded-md px-3 pt-2 pb-[11px]">
        <div className="w-max [&>div]:w-full h-full [&>div]:text-sm text-inherit">
          <div className="flex h-full pt-1 flex-grow items-start">
            <Icon />
          </div>
        </div>
        <div className="w-full flex justify-start text-left pl-2">
          <span className="text-sm font-normal text-inherit text-left">
            {props.label}
          </span>
        </div>
      </LinkWrapper>
      {!colapse && <div className="w-full pt-4 pl-6">{props.children}</div>}
    </div>
  );
};
