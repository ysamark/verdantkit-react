import { Children, forwardRef, isValidElement } from "react";

import { useSideMenu } from "@components/SideMenu/hooks";

type SideMenuButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>;

export const SideMenuButton = forwardRef<
  HTMLButtonElement,
  SideMenuButtonProps
>(function SideMenuButton({ asChild, ...props }, ref) {
  const context = useSideMenu();

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    context.setVisible(!context.visible);
  };

  if (typeof asChild === "boolean" && asChild) {
    const [child] = Children.toArray(props.children);

    if (!isValidElement(child)) {
      return child;
    }

    const childProps =
      typeof child.props === "object" && child.props ? child.props : {};

    return {
      ...child,
      props: {
        ...childProps,
        onclick: buttonClickHandler,
      },
    };
  }

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="button"
      onClick={buttonClickHandler}
    />
  );
});
