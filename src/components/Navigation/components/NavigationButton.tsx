import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";
import { drillAdditionalPropsToFirstChild } from "~/utils";

type NavigationButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to: NavigationButtonTarget;
    asChild?: boolean;
  }
>;

type NavigationButtonTarget = ":back" | ":forward" | ":home" | ":void" | string;

export const NavigationButton = forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(function NavigationButton({ to, asChild, ...props }, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationButton should only be rendered inside a Navigation wrapper"
    );
  }

  const isCurrentScreen = context.isCurrentScreen(to);
  const disabled = !isCurrentScreen ? props.disabled : true;

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();

    switch (to) {
      case ":back":
        context.back();
        break;

      case ":forward":
        context.forward();
        break;

      case ":home":
        context.goToHome();
        break;

      case ":void":
        break;

      default:
        context.goto(to);
        break;
    }

    if (typeof props.onClick === "function") {
      props.onClick(event);
    }
  };

  if (asChild) {
    const [child] = drillAdditionalPropsToFirstChild({
      children: props.children,
      props: {
        ref: ref,
        type: "button",
        role: "button",
        disabled: disabled,
        onClick: buttonClickHandler,
      },
    });

    return [child];
  }

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="button"
      disabled={disabled}
      onClick={buttonClickHandler}
    >
      {props.children}
    </button>
  );
});
