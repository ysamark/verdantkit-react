import { DropDownPosition } from "../types";

type Props = {
  dropDownPosition: DropDownPosition;
  dropDownContentElementCoordinates: DOMRect;
  contentElement: HTMLElement;
  scroll: boolean;
};

export const shouldEnableScrollView = ({
  dropDownPosition,
  dropDownContentElementCoordinates,
  contentElement,
  scroll,
}: Props): boolean => {
  const margin = 20;

  if (dropDownPosition === "bottom") {
    const dropDownContentElementYZ =
      dropDownContentElementCoordinates.y +
      dropDownContentElementCoordinates.height;

    if (dropDownContentElementYZ >= window.innerHeight) {
      const newDropDownHeight =
        window.innerHeight - (dropDownContentElementCoordinates.y + 20);

      Object.assign(contentElement.style, {
        height: `${newDropDownHeight}px`,
      });

      if (!scroll) {
        return true;
      }
    }

    return false;
  }

  if (dropDownContentElementCoordinates.y <= margin) {
    const dropDownContentElementHeightDiff =
      dropDownContentElementCoordinates.y * -1;

    const dropDownContentElementY =
      dropDownContentElementHeightDiff +
      dropDownContentElementCoordinates.y +
      margin;
    const dropDownContentElementHeight =
      dropDownContentElementCoordinates.height -
      (dropDownContentElementHeightDiff + margin);

    Object.assign(contentElement.style, {
      top: `${dropDownContentElementY}px`,
      height: `${dropDownContentElementHeight}px`,
    });

    if (!scroll) {
      return true;
    }
  }

  return false;
};
