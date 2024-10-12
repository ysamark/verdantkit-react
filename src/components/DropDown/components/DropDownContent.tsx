import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { useDropDown } from "@components/DropDown/hooks";
import { updateDropDownContentPosition } from "@components/DropDown/utils";
import { shouldEnableScrollView } from "@components/DropDown/utils/shouldEnableScrollView";
import { shouldHideDropDownContent } from "@components/DropDown/utils/shouldHideDropDownContent";
import { ScrollArea } from "@components/ScrollArea";
import { cn } from "@lib/utils";
import { groupReactElements } from "~/utils";

import { DropDownFooter } from "./DropDownFooter";
import { DropDownHeader } from "./DropDownHeader";

type PropsWidthChildren = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

type DropDownContentProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLDivElement>
>;

export const DropDownContent = forwardRef<
  HTMLDivElement | null,
  DropDownContentProps
>(function DropDownContent(props, ref) {
  const context = useDropDown();

  const [scroll, setScroll] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(context.show);

  useEffect(() => {
    setShow(context.show);
  }, [context.show]);

  const divRef = useRef<HTMLDivElement>(null);
  const dropDownCaretRef = useRef<HTMLElement>(null);

  const [dropDownSections, children] = groupReactElements(props.children, [
    DropDownHeader,
    DropDownFooter,
  ]);

  useImperativeHandle(ref, () => divRef.current as HTMLDivElement);

  useEffect(() => {
    const buttonElement = context.buttonElementRef.current;
    const contentElement = divRef.current;

    const windowClickHandler = (event: MouseEvent) => {
      if (shouldHideDropDownContent({ divRef, event })) {
        context.setShow(false);
      }
    };

    const handleUpdateDropDownContentPosition = () => {
      if (contentElement && buttonElement && show) {
        const [dropDownContentElementCoordinates, dropDownPosition] =
          updateDropDownContentPosition(
            contentElement,
            buttonElement,
            dropDownCaretRef
          );

        const enableScrollView = shouldEnableScrollView({
          scroll,
          contentElement,
          dropDownPosition,
          dropDownContentElementCoordinates,
        });

        if (enableScrollView) {
          setScroll(true);
        }
      }
    };

    const windowScrollHandler = () => {
      handleUpdateDropDownContentPosition();
    };

    const windowResizeHandler = () => {
      handleUpdateDropDownContentPosition();
    };

    handleUpdateDropDownContentPosition();

    window.addEventListener("click", windowClickHandler);
    window.addEventListener("scroll", windowScrollHandler);
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("click", windowClickHandler);
      window.removeEventListener("scroll", windowScrollHandler);
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  const DropDownContentBody = scroll
    ? ScrollArea
    : (props: PropsWidthChildren) => {
        return <Fragment>{props.children}</Fragment>;
      };

  return (
    <div
      {...props}
      ref={divRef}
      className={cn(props.className, "fixed z-[50] flex flex-col max-w-[96%]")}
    >
      <i
        className="w-3 block fixed border-solid border-[16px]"
        ref={dropDownCaretRef}
      />
      {dropDownSections[0]}
      <DropDownContentBody className="w-full mr-2 flex flex-grow">
        {children}
      </DropDownContentBody>
      {dropDownSections[1]}
    </div>
  );
});
