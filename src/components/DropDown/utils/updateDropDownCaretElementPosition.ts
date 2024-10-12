import { DropDownPosition } from "@components/DropDown/types";
import { noEmpty } from "@verdantkit/utils";

type UpdateDropDownCaretElementPositionUtilsProps = {
  dropDownCaretRef: React.RefObject<HTMLElement>;
  dropDownContentElement: HTMLElement;
  dropDownButtonElement: HTMLElement;
  position: DropDownPosition;
  y: number;
};

export const updateDropDownCaretElementPosition = ({
  dropDownButtonElement,
  dropDownCaretRef,
  dropDownContentElement,
  position,
  y,
}: UpdateDropDownCaretElementPositionUtilsProps) => {
  const margin = 10;
  const dropDownCaretElement = dropDownCaretRef.current;
  const dropDownButtonElementCoordinates =
    dropDownButtonElement.getBoundingClientRect();
  const dropDownContentElementCoordinates =
    dropDownContentElement.getBoundingClientRect();

  const dropDownContentElementBackgroundColor = window.getComputedStyle(
    dropDownContentElement
  ).backgroundColor;

  if (dropDownCaretElement instanceof HTMLElement) {
    const dropDownCaretElementCoordinates =
      dropDownCaretElement.getBoundingClientRect();
    const dropDownCaretElementBackgroundColor = noEmpty(
      dropDownContentElementBackgroundColor
    )
      ? dropDownContentElementBackgroundColor
      : undefined;

    const dropDownCaretElementX =
      dropDownButtonElementCoordinates.x +
      dropDownButtonElementCoordinates.width / 2 -
      dropDownCaretElementCoordinates.width / 2;
    let dropDownCaretElementY = y - (dropDownCaretElementCoordinates.width - 6);

    if (position === "top") {
      dropDownCaretElementY +=
        margin +
        dropDownContentElementCoordinates.height +
        dropDownCaretElementCoordinates.width / 2 -
        4;
    }

    const resolveDropDownCaretBorderColor = () => {
      if (position === "bottom") {
        return `transparent transparent ${dropDownCaretElementBackgroundColor}`;
      }

      return `${dropDownCaretElementBackgroundColor} transparent transparent`;
    };

    Object.assign(dropDownCaretElement.style, {
      left: `${dropDownCaretElementX}px`,
      top: `${dropDownCaretElementY}px`,
      borderColor: dropDownCaretElementBackgroundColor
        ? resolveDropDownCaretBorderColor()
        : undefined,
    });
  }
};
