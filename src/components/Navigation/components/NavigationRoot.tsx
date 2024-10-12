import { forwardRef, useEffect, useState } from "react";

import { useNavigation } from "@components/Navigation/hooks";
import { getReactElement, getReactElements } from "~/utils";

import { NavigationFooter } from "./NavigationFooter";
import { NavigationHeader } from "./NavigationHeader";
import { NavigationRootContentWrapper } from "./NavigationRootContentWrapper";
import { NavigationScreen } from "./NavigationScreen";

type NavigationRootProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const NavigationRoot = forwardRef<HTMLDivElement, NavigationRootProps>(
  function NavigationRoot(props, ref) {
    const [style, setStyle] = useState<React.CSSProperties>({});

    const context = useNavigation();

    const navigationScreenElements = getReactElements(
      props.children,
      NavigationScreen
    );

    const navigationHeaderElement = getReactElement(
      props.children,
      NavigationHeader
    );

    const navigationFooterElement = getReactElement(
      props.children,
      NavigationFooter
    );

    useEffect(() => {
      if (!context.navigating) {
        return setStyle({});
      }

      setStyle({
        overflowX: "clip",
        overflowY: "visible",
      });
    }, [context.navigating]);

    const elementStyles: React.CSSProperties = props.style || {};

    return (
      <div {...props} ref={ref} style={{ ...elementStyles, ...style }}>
        {navigationHeaderElement}
        <NavigationRootContentWrapper>
          {navigationScreenElements}
        </NavigationRootContentWrapper>
        {navigationFooterElement}
      </div>
    );
  }
);
