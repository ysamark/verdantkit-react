import { Fragment } from "react";

import { useNavigation } from "@components/Navigation/hooks";

export const NavigationRootContentWrapper = (
  props: React.PropsWithChildren
) => {
  const context = useNavigation();

  if (!context.navigating) {
    return <Fragment>{props.children}</Fragment>;
  }

  return (
    <div className="w-full transition-transform animate-out">
      <div className="-translate-x-full animate-[slideToLeft_.3s_linear]">
        {props.children}
      </div>
    </div>
  );
};
