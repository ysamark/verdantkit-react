import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";
import { NavigationButton } from "./NavigationButton";

type NavigationForwardProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement>
>;

export const NavigationForward = forwardRef<
  HTMLButtonElement,
  NavigationForwardProps
>(function NavigationForward(props, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationForward component should only be rendered inside a Navigation wrapper"
    );
  }

  return (
    <NavigationButton
      {...props}
      to=":forward"
      ref={ref}
      disabled={!context.canGoForward()}
    >
      {props.children}
    </NavigationButton>
  );
});
