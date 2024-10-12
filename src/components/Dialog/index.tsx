import { Fragment, useEffect, useRef, useState } from "react";

import { cn } from "~/utils";

import { DialogContextProvider } from "./context";
import { DialogBody } from "./DialogBody";
import { useDialogContextDataObject } from "./hooks";
import { DialogProps } from "./types";
import { resolveDialogBoxSize } from "./utils";

export { useDialog } from "./hooks";

export type DialogComponent = React.FunctionComponent<
  React.PropsWithChildren<DialogProps>
>;

export const Dialog: DialogComponent = (props) => {
  const [show, setShow] = useState<boolean>(props.show || false);

  // const [centerDialogBox, setCenterDialogBox] = useState<boolean>(true);

  const dialogBoxElementRefState = useRef<HTMLDivElement>();
  const dialogContextDataObject = useDialogContextDataObject(props, setShow);

  const dialogBoxElementRef = (dialogBoxElement: HTMLDivElement): void => {
    if (!dialogBoxElement) {
      return;
    }

    dialogBoxElementRefState.current = dialogBoxElement;

    const dialogBoxElementHeight = dialogBoxElement.offsetHeight;
    const dialogBoxElementParent = dialogBoxElement.parentNode;

    if (
      dialogBoxElementHeight >= window.innerHeight - 80 &&
      dialogBoxElementParent instanceof HTMLDivElement
    ) {
      // p-32 overflow-y-auto
      const styles: React.CSSProperties = {
        padding: "128px",
        overflowY: "auto",
        alignItems: "unset",
      };

      Object.assign(dialogBoxElementParent.style, styles);
    }
  };

  useEffect(() => {
    setShow(props.show || false);
  }, [props.show]);

  useEffect(() => {
    if (props.size) {
      dialogContextDataObject.setSize(props.size);
    }
  }, [dialogContextDataObject, props.size]);

  if (!show) {
    return null;
  }

  const closeButtonClickHandler = () => {
    setShow(false);

    if (typeof props.onClose === "function") {
      props.onClose();
    }
  };

  const labeledCloseButton = () =>
    Boolean(
      typeof props.closeButtonLabel === "string" &&
        /\S/.test(props.closeButtonLabel)
    );

  const titled = Boolean(
    typeof dialogContextDataObject.title === "string" &&
      /\S/.test(dialogContextDataObject.title)
  );

  const doNotShowButton =
    typeof props.showButton === "boolean" && !props.showButton;

  const fitDialogInWindow = typeof props.fit === "boolean" && props.fit;

  const DialogBodyWrapper = fitDialogInWindow ? DialogBody : Fragment;
  const DialogFooterElement =
    typeof props.footer === "function" ? props.footer : Fragment;

  const shouldShowFooter =
    !doNotShowButton || typeof props.footer === "function";

  return (
    <DialogContextProvider value={dialogContextDataObject}>
      <div
        className={cn(
          "size-full z-[12] fixed top-0 left-0 bg-black bg-opacity-70 flex flex-row justify-center",
          "p-10 items-center before:fixed before:content-none before:block before:size-full before:top-0 before:left-0 -z-[1] before:backdrop-blur-[8px]"
        )}
      >
        <div
          ref={dialogBoxElementRef}
          style={{
            maxWidth: `${resolveDialogBoxSize(dialogContextDataObject.size)}px`,
          }}
          className={cn(
            "bg-zinc-50 dark:bg-zinc-900 gap-6 transition-all",
            "w-full h-max px-1 py-6 rounded-xl flex flex-col shadow-2xl relative"
          )}
        >
          {titled && (
            <div className="w-full h-auto px-7 flex">
              <h1 className="text-zinc-950 dark:text-zinc-50 text-sm font-extrabold">
                {dialogContextDataObject.title}
              </h1>
            </div>
          )}
          <DialogBodyWrapper>
            <div className="size-full flex px-7 flex-col">{props.children}</div>
          </DialogBodyWrapper>
          {shouldShowFooter && (
            <div className="w-full flex px-7 justify-center items-center flex-col gap-2">
              <DialogFooterElement />
              {!doNotShowButton && (
                <button
                  onClick={closeButtonClickHandler}
                  type="button"
                  className="dark:text-zinc-400 border-0 outline-none bg-transparent hover:underline"
                >
                  {(labeledCloseButton() && props.closeButtonLabel) ||
                    "Cancelar"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </DialogContextProvider>
  );
};
