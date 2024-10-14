import * as ReactHoverCard from "@radix-ui/react-hover-card";
import { forwardRef } from "react";

import { HoverCardProps } from "./types";

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  function HoverCard({ content: Content, ...props }, ref) {
    return (
      <ReactHoverCard.Root>
        <ReactHoverCard.Trigger asChild>
          {props.children}
        </ReactHoverCard.Trigger>
        <ReactHoverCard.Portal>
          <ReactHoverCard.Content {...props} ref={ref}>
            <Content />
          </ReactHoverCard.Content>
        </ReactHoverCard.Portal>
      </ReactHoverCard.Root>
    );
  }
);
