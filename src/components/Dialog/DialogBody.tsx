import { useEffect, useRef } from "react";

import { ScrollArea } from "@components/ScrollArea";

import { useDialog } from "./hooks";
import { updateDialogSize } from "./utils/updateDialogSize";

type DialogBodyProps = React.PropsWithChildren<
  React.PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>
>;

type DialogBodyComponent = React.FunctionComponent<DialogBodyProps>;

export const DialogBody: DialogBodyComponent = (props) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const context = useDialog();

  useEffect(() => {
    const scrollAreaElement = scrollAreaRef.current;

    const effectHandler = () => {
      updateDialogSize(scrollAreaElement);
    };

    effectHandler();

    window.addEventListener("resize", effectHandler);

    return () => {
      window.removeEventListener("resize", effectHandler);
    };
  });

  useEffect(() => {
    updateDialogSize(scrollAreaRef.current);
  }, [context.size]);

  return (
    <ScrollArea ref={scrollAreaRef} className="w-full mr-3">
      {props.children}
    </ScrollArea>
  );
};
