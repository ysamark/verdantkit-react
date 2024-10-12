import { forwardRef } from "react";

import { useNavigation } from "@components/Navigation/hooks/useNavigation";

type NavigationScreenProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    name: string;
  }
>;

export const NavigationScreen = forwardRef<
  HTMLDivElement,
  NavigationScreenProps
>(function NavigationScreen({ name, ...props }, ref) {
  const context = useNavigation();

  if (typeof context.isCurrentScreen !== "function") {
    throw new Error(
      "RenderError: NavigationScreen should only be rendered inside a Navigation wrapper"
    );
  }

  if (!context.isCurrentScreen(name)) {
    return null;
  }

  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});
