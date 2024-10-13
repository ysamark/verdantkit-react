import { forwardRef, useEffect, useRef, useState } from "react";

import { cn } from "~/utils";

import { SelectCursor, SelectCursorProps } from "./SelectCursor";
import { Axises, SelectCursorAxis } from "./SelectCursor/types";
import { getSelectCursorCoordinates } from "./utils/getSelectCursorCoordinates";
import { resolveSelectCursorSizes } from "./utils/resolveSelectCursorSizes";

type SelectableAreaContainerProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & SelectCursorProps
>;

export const SelectableAreaContainer = forwardRef<
  HTMLDivElement,
  SelectableAreaContainerProps
>(function SelectableArea(
  { children, backgroundColor, borderColor, cursorStyle, ...props },
  ref
) {
  const [selecting, setSelecting] = useState<boolean>(false);
  const [mouseCoords, setMouseCoords] = useState<Axises>({
    x: 0,
    y: 0,
  });

  const selectCursorElementRef = useRef<HTMLDivElement>(null);
  const startSelectionOnTimeOutEndState = useRef<boolean>(false);
  const selectCursorAxisState = useRef<SelectCursorAxis>({
    x: 0,
    y: 0,
    state: {
      x: 0,
      y: 0,
    },
  });

  useEffect(() => {
    const windowMouseUpHandler = () => {
      startSelectionOnTimeOutEndState.current = false;
      setSelecting(false);
    };

    const windowMouseMoveHandler = (event: MouseEvent): void => {
      if (!selectCursorElementRef.current) {
        return;
      }

      const { width, height, ...cursorCoordinates } =
        getSelectCursorCoordinates(event, selectCursorAxisState.current.state);

      const selectCursor = resolveSelectCursorSizes({
        height,
        width,
        cursorStyle,
      });

      if (cursorStyle === "radial") {
        cursorCoordinates.x -= selectCursor.width / 2;
        cursorCoordinates.y -= selectCursor.height / 2;
      }

      Object.assign(selectCursorElementRef.current.style, {
        top: `${cursorCoordinates.y}px`,
        left: `${cursorCoordinates.x}px`,
        width: `${selectCursor.width}px`,
        height: `${selectCursor.height}px`,
      });
    };

    window.addEventListener("mouseup", windowMouseUpHandler);
    window.addEventListener("mousemove", windowMouseMoveHandler);

    return () => {
      window.removeEventListener("mouseup", windowMouseUpHandler);
      window.removeEventListener("mousemove", windowMouseMoveHandler);
    };
  }, []);

  const selectableAreaMouseDownHandler: React.MouseEventHandler = (event) => {
    startSelectionOnTimeOutEndState.current = true;

    selectCursorAxisState.current.x = event.clientX;
    selectCursorAxisState.current.y = event.clientY;

    Object.assign(selectCursorAxisState.current.state, {
      x: event.clientX,
      y: event.clientY,
    });

    setTimeout(() => {
      if (startSelectionOnTimeOutEndState.current) {
        setMouseCoords({
          x: event.clientX,
          y: event.clientY,
        });
        setSelecting(true);
      }
    }, 100);
  };

  const selectableAreaMouseUpHandler = () => {
    startSelectionOnTimeOutEndState.current = false;

    setMouseCoords({
      x: 0,
      y: 0,
    });
    setSelecting(false);
  };

  return (
    <div
      {...props}
      ref={ref}
      onMouseDown={selectableAreaMouseDownHandler}
      onMouseUp={selectableAreaMouseUpHandler}
      className={cn(
        props.className,
        selecting ? "[&_*]:pointer-events-auto" : null,
        "[&_*]:select-none select-none"
      )}
    >
      {children}
      {selecting && (
        <SelectCursor
          backgroundColor={backgroundColor}
          ref={selectCursorElementRef}
          borderColor={borderColor}
          cursorStyle={cursorStyle}
          style={{
            top: `${mouseCoords.y}px`,
            left: `${mouseCoords.x}px`,
          }}
        />
      )}
    </div>
  );
});
