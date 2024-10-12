import { forwardRef } from "react";

import { cn } from "~/lib/utils";

type EmptyListContainerProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const EmptyListContainer = forwardRef<
  HTMLDivElement,
  EmptyListContainerProps
>(function EmptyListContainer(props, ref) {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        "w-full p-4 md:p-10 lg:py-36 lg:px-16 [&_*]:select-none [&_h1]:font-extrabold [&_h1]:text-4xl text-zinc-500 dark:text-zinc-200 [&_h1]:py-10 [&_h1]:pb-7 [&_h1]:w-full [&_*]:uppercase [&_*]:text-center [&_h2]:font-light [&_h2]:text-2xl [&_h2]:text-zinc-300 dark:[&_h2]:text-zinc-100 [&_ul]:w-full [&_ul]:pt-10 [&_ul]:flex [&_ul]:flex-row [&_ul]:justify-center [&_ul]:gap-2 [&_ul_li]:inline-flex [&_ul_li_button]:bg-transparent [&_ul_li_button]:outline-0 [&_ul_li_button]:border-0 [&_ul_li_button]:text-[15px] [&_ul_li_button]:font-normal [&_ul_li_button]:hover:underline"
      )}
      ref={ref}
    />
  );
});
