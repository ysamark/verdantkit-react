import { forwardRef } from "react";

import { cn } from "~/lib/utils";

export const ListLoaderButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
>(function ListLoaderButton(props, ref) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "bg-transparent border-0 outline-0 pt-2 pb-[10px] px-9 rounded-full text-zinc-800 bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 enabled:hover:bg-zinc-300 enabled:active:bg-zinc-400 dark:enabled:hover:bg-zinc-700 dark:enabled:active:bg-zinc-600"
      )}
      ref={ref}
    >
      {props.children}
    </button>
  );
});
