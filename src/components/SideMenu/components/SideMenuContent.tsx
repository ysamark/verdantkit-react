import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { DarkTransparencyWrapper } from "@components/DarkTransparencyWrapper";
import { ScrollArea } from "@components/ScrollArea";
import { useSideMenu } from "@components/SideMenu/hooks";
import { cn } from "@lib/utils";
import { clickDoneOutOf } from "@utils/clickDoneOutOf";
import { groupReactElements } from "~/utils";

import { SideMenuFooter } from "./SideMenuFooter";
import { SideMenuHeader } from "./SideMenuHeader";

type SideMenuContentProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export const SideMenuContent = forwardRef<HTMLDivElement, SideMenuContentProps>(
  function SideMenuContent({ children, ...props }, ref) {
    const [show, setShow] = useState<boolean>(false);

    const divElementRef = useRef<HTMLDivElement>(null);

    const context = useSideMenu();

    useImperativeHandle(ref, () => {
      return divElementRef.current as HTMLDivElement;
    });

    useEffect(() => {
      const windowClickHandler = (event: MouseEvent) => {
        if (clickDoneOutOf(divElementRef, event) && show) {
          setShow(false);
        }
      };

      window.addEventListener("click", windowClickHandler);

      return () => {
        window.removeEventListener("click", windowClickHandler);
      };
    });

    useEffect(() => {
      const effectTimeOut = setTimeout(() => {
        context.setVisible(show);
      }, 300);

      return () => {
        clearTimeout(effectTimeOut);
      };
    }, [context, show]);

    useEffect(() => {
      if (context.visible) {
        setShow(context.visible);
      }
    }, [context.visible]);

    if (context.hidden) {
      return;
    }

    const [sideMenuSections, rest] = groupReactElements(children, [
      SideMenuHeader,
      SideMenuFooter,
    ]);

    return (
      <DarkTransparencyWrapper>
        <div
          {...props}
          className={cn(
            props.className,
            "transition-transform h-screen fixed top-0 bottom-0 flex flex-col",
            context.props.position === "left" ? "left-0" : "right-0",
            context.props.position === "left"
              ? show
                ? "translate-x-0"
                : "-translate-x-full"
              : show
              ? "translate-x-0"
              : "translate-x-full"
          )}
          ref={divElementRef}
        >
          {sideMenuSections[0]}
          <ScrollArea className="flex w-full flex-grow flex-col">
            {rest}
          </ScrollArea>
          {sideMenuSections[1]}
        </div>
      </DarkTransparencyWrapper>
    );
  }
);
