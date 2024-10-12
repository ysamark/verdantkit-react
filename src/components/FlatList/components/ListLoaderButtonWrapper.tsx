import { forwardRef } from "react";

import { cn } from "~/utils";

export const ListLoaderButtonWrapper = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
>(function ListLoaderButtonWrapper(props, ref) {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        "w-full flex flex-row justify-center pt-8"
      )}
      ref={ref}
    >
      {props.children}
    </div>
  );
});
