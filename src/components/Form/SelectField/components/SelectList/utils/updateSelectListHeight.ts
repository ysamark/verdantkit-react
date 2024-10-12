export const updateSelectListHeight = (
  selectListElementRef: React.RefObject<HTMLElement>
) => {
  const selectListElement = selectListElementRef.current;

  if (selectListElement instanceof HTMLElement) {
    const scrollAreaElement = selectListElement.children[0];

    if (scrollAreaElement instanceof HTMLDivElement) {
      scrollAreaElement.style.height = "auto";
    }

    const selectListElementCoordinates =
      selectListElement.getBoundingClientRect();

    const selectListElementXY =
      selectListElementCoordinates.y + selectListElementCoordinates.height;

    if (selectListElementXY >= window.innerHeight) {
      const listWrapperElementMaxHeight = Math.round(
        window.innerHeight - (selectListElementCoordinates.y + 30)
      );

      if (scrollAreaElement instanceof HTMLDivElement) {
        scrollAreaElement.style.height = `${listWrapperElementMaxHeight}px`;
      }
    }
  }
};
