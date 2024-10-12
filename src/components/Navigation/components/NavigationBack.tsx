import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";
import { NavigationButton } from "./NavigationButton";

type NavigationBackProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement>
>;

export const NavigationBack = forwardRef<
  HTMLButtonElement,
  NavigationBackProps
>(function NavigationBack(props, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationBack component should only be rendered inside a Navigation wrapper"
    );
  }

  return (
    <NavigationButton
      {...props}
      to=":back"
      ref={ref}
      disabled={!context.canGoBack()}
    >
      {props.children}
    </NavigationButton>
  );
});
