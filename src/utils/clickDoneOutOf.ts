type ElementOrRef = HTMLElement | React.RefObject<HTMLElement>;

export const clickDoneOutOf = (
  elementOrRef: ElementOrRef,
  event: MouseEvent | React.MouseEvent
): boolean => {
  const element =
    elementOrRef instanceof HTMLElement ? elementOrRef : elementOrRef.current;

  if (!(element instanceof HTMLElement)) {
    return true;
  }

  const divElement = element;

  const divElementCoordinates = divElement.getBoundingClientRect();

  const clickDoneOutOfElementArea = Boolean(
    event.clientX > divElementCoordinates.x + divElementCoordinates.width ||
      event.clientX < divElementCoordinates.x ||
      event.clientY > divElementCoordinates.y + divElementCoordinates.height ||
      event.clientY < divElementCoordinates.y
  );

  return clickDoneOutOfElementArea;
};
