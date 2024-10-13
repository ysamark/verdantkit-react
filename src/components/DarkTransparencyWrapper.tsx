import { forwardRef } from "react";

import { cn } from "~/lib/utils";

type DarkTransparencyWrapperProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const DarkTransparencyWrapper = forwardRef<
  HTMLDivElement,
  DarkTransparencyWrapperProps
>(function DarkTransparencyWrapper(props, ref) {
  return (
    <div
      {...props}
      className={cn(
        "size-full z-[12] fixed top-0 left-0 bg-black bg-opacity-70 flex flex-row justify-center p-10 items-center before:fixed before:content-none before:block before:size-full before:top-0 before:left-0 before:backdrop-blur-[8px]",
        props.className
      )}
      ref={ref}
    ></div>
  );
});
