import { DropDownPosition } from "@components/DropDown/types";

import { updateDropDownCaretElementPosition } from "./updateDropDownCaretElementPosition";

const getElementCoordinates = (element: HTMLElement) =>
  element.getBoundingClientRect();

export const updateDropDownContentPosition = (
  dropDownContentElement: HTMLElement,
  dropDownButtonElement: HTMLElement,
  dropDownCaretRef: React.RefObject<HTMLElement>
): [DOMRect, DropDownPosition] => {
  const dropDownButtonElementCoordinates = getElementCoordinates(
    dropDownButtonElement
  );
  const dropDownContentElementCoordinates = getElementCoordinates(
    dropDownContentElement
  );

  const margin = 10;

  let position: DropDownPosition = "bottom";
  let x =
    dropDownButtonElementCoordinates.x +
    dropDownButtonElementCoordinates.width / 2 -
    dropDownContentElementCoordinates.width / 2;

  if (x < margin) {
    x = margin;
  }

  const windowWidth = document.body.offsetWidth - margin;
  const windowHeight = window.innerHeight - margin;

  if (x + dropDownContentElementCoordinates.width >= windowWidth) {
    x = windowWidth - dropDownContentElementCoordinates.width;

    if (x < margin) {
      x = windowWidth * 0.02;
    }
  }

  let y =
    dropDownButtonElementCoordinates.y +
    dropDownButtonElementCoordinates.height +
    margin;

  if (y + dropDownContentElementCoordinates.height >= windowHeight) {
    position = "top";

    const oldY = y;

    y -=
      dropDownContentElementCoordinates.height +
      dropDownButtonElementCoordinates.height +
      margin * 2;

    // const oldYToHeight =
    //   oldY + dropDownContentElementCoordinates.height - windowHeight;
    // const currentYToHeight =
    //   y + dropDownContentElementCoordinates.height - windowHeight;

    if (y <= margin) {
      const spaceAboveDropDownButtonElement =
        dropDownButtonElementCoordinates.y;
      const spaceBellowDropDownButtonElement =
        windowHeight -
        (dropDownButtonElementCoordinates.y +
          dropDownButtonElementCoordinates.height);

      if (
        !(spaceAboveDropDownButtonElement >= spaceBellowDropDownButtonElement)
      ) {
        position = "bottom";
        y = oldY;
      }
      // console.log({ oldYToHeight, currentYToHeight });
      // y = oldY;
      // position = "bottom";
      // console.log(">>> fallback y");
    }
  }

  updateDropDownCaretElementPosition({
    dropDownCaretRef,
    dropDownContentElement,
    dropDownButtonElement,
    position,
    y,
  });

  const styles: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
  };

  Object.assign(dropDownContentElement.style, styles);

  return [getElementCoordinates(dropDownContentElement), position];
};
