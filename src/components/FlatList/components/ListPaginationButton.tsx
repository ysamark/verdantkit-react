import { forwardRef } from "react";

import { useFlatList } from "@components/FlatList/hooks";
import { cn } from "~/lib/utils";

type ListPaginationButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  selected?: boolean;
};

export const ListPaginationButton = forwardRef<
  HTMLButtonElement,
  ListPaginationButtonProps
>(function ListPaginationButton(props, ref) {
  const context = useFlatList();

  return (
    <button
      {...props}
      className={cn(
        "bg-transparent w-max border-0 outline-0 py-2 px-3 rounded-full text-zinc-800 bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 enabled:hover:bg-zinc-300 enabled:active:bg-zinc-400 dark:enabled:hover:bg-zinc-700 dark:enabled:active:bg-zinc-600 [&_span]:flex",
        props.selected
          ? "bg-primary-200 enabled:hover:bg-primary-300 enabled:active:bg-primary-400 dark:bg-primary-500 dark:enabled:hover:bg-primary-300 dark:enabled:active:bg-primary-400 text-zinc-50 [&_span]:px-3"
          : "[&_span]:px-1",
        props.className
      )}
      type="button"
      role="button"
      ref={ref}
      disabled={context.props.loading}
    >
      {props.children}
    </button>
  );
});
