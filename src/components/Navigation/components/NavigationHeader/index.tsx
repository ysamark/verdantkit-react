import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";

type NavigationHeaderProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const NavigationHeader = forwardRef<
  HTMLDivElement,
  NavigationHeaderProps
>(function NavigationHeader(props, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationHeader should only be rendered inside a Navigation wrapper"
    );
  }

  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});
