import { forwardRef } from "react";

import { NavigationBack } from "./components/NavigationBack";
import { NavigationButton } from "./components/NavigationButton";
import { NavigationFooter } from "./components/NavigationFooter";
import { NavigationForward } from "./components/NavigationForward";
import { NavigationHeader } from "./components/NavigationHeader";
import { NavigationRoot } from "./components/NavigationRoot";
import { NavigationScreen } from "./components/NavigationScreen";
import { NavigationContextProvider } from "./context";
import { NavigationComponent, NavigationProps } from "./types";

export { NavigationBack } from "./components/NavigationBack";
export { NavigationButton } from "./components/NavigationButton";
export { NavigationFooter } from "./components/NavigationFooter";
export { NavigationForward } from "./components/NavigationForward";
export { NavigationHeader } from "./components/NavigationHeader";
export { NavigationScreen } from "./components/NavigationScreen";

export { useNavigation } from "./hooks";
export * from "./types";

export const Navigation: NavigationComponent = forwardRef<
  HTMLDivElement,
  NavigationProps
>(function Navigation({ home, ...props }, ref) {
  return (
    <NavigationContextProvider home={home} {...props}>
      <NavigationRoot {...props} ref={ref}>
        {props.children}
      </NavigationRoot>
    </NavigationContextProvider>
  );
});

const navigationElements = {
  Root: Navigation,
  Back: NavigationBack,
  Footer: NavigationFooter,
  Header: NavigationHeader,
  Screen: NavigationScreen,
  Button: NavigationButton,
  Forward: NavigationForward,
};

export default navigationElements;
