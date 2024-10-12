import {
  Axises,
  Cords,
} from "@components/SelectableAreaContainer/SelectCursor/types";

export const getSelectCursorCoordinates = (
  event: MouseEvent,
  stateAxises: Axises
): Cords => {
  const cords: Cords = {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  };

  cords.x = stateAxises.x;
  cords.y = stateAxises.y;

  const changeWidth = (width: number): void => {
    cords.width = width;
  };

  changeWidth(event.clientX - cords.x);
  cords.height = event.clientY - cords.y;

  if (event.clientX <= stateAxises.x) {
    changeWidth(stateAxises.x - event.clientX);

    cords.x -= cords.width;
  }

  if (event.clientY <= stateAxises.y) {
    cords.height = stateAxises.y - event.clientY;

    cords.y -= cords.height;
  }

  return cords;
};
