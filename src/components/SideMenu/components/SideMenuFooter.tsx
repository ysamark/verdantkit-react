import { forwardRef } from "react";

type SideMenuFooterProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const SideMenuFooter = forwardRef<HTMLDivElement, SideMenuFooterProps>(
  function SideMenuFooter(props, ref) {
    return <div {...props} ref={ref} />;
  }
);
