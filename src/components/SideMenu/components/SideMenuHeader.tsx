import { forwardRef } from "react";

type SideMenuHeaderProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const SideMenuHeader = forwardRef<HTMLDivElement, SideMenuHeaderProps>(
  function SideMenuHeader(props, ref) {
    return <div {...props} ref={ref} />;
  }
);
