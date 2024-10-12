import { forwardRef } from "react";

type DropDownFooterProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLDivElement>
>;

export const DropDownFooter = forwardRef<HTMLDivElement, DropDownFooterProps>(
  function DropDownFooter(props, ref) {
    return <div {...props} ref={ref} />;
  }
);
