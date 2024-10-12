import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";

type NavigationFooterProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const NavigationFooter = forwardRef<
  HTMLDivElement,
  NavigationFooterProps
>(function NavigationFooter(props, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationFooter should only be rendered inside a Navigation wrapper"
    );
  }

  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});
