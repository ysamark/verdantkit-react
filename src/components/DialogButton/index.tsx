import { forwardRef, Fragment, isValidElement, useState } from "react";

import { Dialog } from "@components/Dialog";
import { DialogProps } from "@components/Dialog/types";

type DialogButtonProps = React.PropsWithChildren<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "content"> &
    Omit<DialogProps, "show"> & {
      content: React.ElementType;
      asChild?: boolean;
    }
>;

type DialogButtonComponent = React.FunctionComponent<DialogButtonProps>;

export const DialogButton: DialogButtonComponent = forwardRef<
  HTMLButtonElement,
  DialogButtonProps
>(function DialogButton(props, ref) {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const {
    size,
    onClose,
    title,
    showButton,
    closeButtonLabel,
    fit,
    footer,
    asChild,
    children,
    content: Content,
    ...rest
  } = props;

  const dialogProps = {
    size,
    onClose,
    title,
    showButton,
    closeButtonLabel,
    fit,
    footer,
  };

  const buttonClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();

    setShowDialog(true);

    if (typeof props.onClick === "function") {
      props.onClick(event);
    }
  };

  const dialogCloseHandler = () => {
    setShowDialog(false);

    if (typeof dialogProps.onClose === "function") {
      dialogProps.onClose();
    }
  };

  const renderChildren = () => {
    const children =
      props.children instanceof Array ? props.children : [props.children];
    const [child] = children;

    if (isValidElement(child)) {
      const childProps =
        typeof child.props === "object" && child.props ? child.props : {};

      return {
        ...child,
        props: {
          ...childProps,
          ...rest,
          ref: ref,
          onClick: buttonClickHandler,
          type: "button",
          role: "button",
        },
      };
    }

    return child;
  };

  return (
    <Fragment>
      {asChild ? (
        renderChildren()
      ) : (
        <button
          {...rest}
          ref={ref}
          onClick={buttonClickHandler}
          type="button"
          role="button"
        >
          {children}
        </button>
      )}
      <Dialog {...dialogProps} show={showDialog} onClose={dialogCloseHandler}>
        <Content />
      </Dialog>
    </Fragment>
  );
});
