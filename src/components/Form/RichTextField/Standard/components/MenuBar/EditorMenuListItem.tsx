import { forwardRef } from "react";

import { cn } from "@lib/utils";

type EditorMenuListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export const EditorMenuListItem = forwardRef<
  HTMLLIElement,
  EditorMenuListItemProps
>(function EditorMenuListItem(props, ref) {
  return (
    <li
      {...props}
      className={cn(
        props.className,
        "inline-flex relative flex-col items-center"
      )}
      ref={ref}
    />
  );
});
