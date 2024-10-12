type ShouldHideDropDownContentUtilProps = {
  divRef: React.RefObject<HTMLDivElement>;
  event: MouseEvent;
};

type ShouldHideDropDownContentUtil = (
  props: ShouldHideDropDownContentUtilProps
) => boolean;

export const shouldHideDropDownContent: ShouldHideDropDownContentUtil = ({
  divRef,
  event,
}) => {
  if (!(divRef.current instanceof HTMLDivElement)) {
    return false;
  }

  const { clientX, clientY } = event;

  const divElement = divRef.current;
  const divElementCoordinates = divElement.getBoundingClientRect();

  const shouldHideDropDownContent = Boolean(
    clientX < divElementCoordinates.x ||
      clientX > divElementCoordinates.x + divElementCoordinates.width ||
      clientY < divElementCoordinates.y ||
      clientY > divElementCoordinates.y + divElementCoordinates.height
  );

  return shouldHideDropDownContent;
};
