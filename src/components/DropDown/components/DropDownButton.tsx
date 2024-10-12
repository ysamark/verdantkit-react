import React, { forwardRef, useImperativeHandle } from "react";

import { useDropDown } from "@components/DropDown/hooks";

type DropDownButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>;

export const DropDownButton = forwardRef<
  HTMLButtonElement,
  DropDownButtonProps
>(function DropDownButton({ asChild, ...props }, ref) {
  const context = useDropDown();

  const buttonClickHandler = () => {
    context.setShow(true);
  };

  useImperativeHandle(ref, () => {
    const buttonElement = context.buttonElementRef.current;

    return buttonElement as HTMLButtonElement;
  });

  if (asChild) {
    const [child] = React.Children.toArray(props.children);

    if (React.isValidElement(child)) {
      const childProps =
        typeof child.props === "object" && child.props ? child.props : {};

      return {
        ...child,
        props: {
          ...childProps,
          ...props,
          ref,
          onClick: buttonClickHandler,
        },
      };
    }

    return child;
  }

  return (
    <button
      {...props}
      type="button"
      role="button"
      ref={context.buttonElementRef}
      onClick={buttonClickHandler}
    />
  );
});
