import { forwardRef } from "react";

type DropDownHeaderProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLDivElement>
>;

export const DropDownHeader = forwardRef<HTMLDivElement, DropDownHeaderProps>(
  function DropDownHeader(props, ref) {
    return <div {...props} ref={ref} />;
  }
);
