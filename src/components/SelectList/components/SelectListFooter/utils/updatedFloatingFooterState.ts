import { Nullable } from "@verdantkit/utils";

export const updatedFloatingFooterState = (
  footerElement: Nullable<HTMLElement>
) => {
  if (!(footerElement instanceof HTMLDivElement)) {
    return null;
  }

  const footerElementMargin = 10;
  const windowSafeAreaHeight = window.innerHeight - footerElementMargin;
  const footerElementParent = footerElement.parentNode as HTMLDivElement;
  const footerElementParentCoordinates =
    footerElementParent.getBoundingClientRect();

  let footerElementOffsetY =
    footerElementParentCoordinates.y +
    footerElementParentCoordinates.height -
    footerElement.offsetHeight;

  const footerElementParentYZ =
    footerElementParentCoordinates.y + footerElementParentCoordinates.height;

  if (footerElementParentYZ >= windowSafeAreaHeight) {
    footerElementOffsetY = windowSafeAreaHeight - footerElement.offsetHeight;
  }

  Object.assign(footerElement.style, {
    top: `${footerElementOffsetY}px`,
    left: `${footerElementParentCoordinates.left}px`,
    width: `${footerElementParentCoordinates.width}px`,
  });
};
