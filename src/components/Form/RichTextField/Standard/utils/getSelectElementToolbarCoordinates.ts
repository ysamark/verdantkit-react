import { Nullable } from "@verdantkit/utils";

import { Cords } from "@components/SelectableAreaContainer/SelectCursor/types";

type GetSelectedElementOptionsCoordinatesUtilProps = {
  editorContentRef: React.RefObject<HTMLDivElement>;
};

type GetSelectElementToolbarCoordinatesUtilResponse = {
  selectElementToolbarCoordinates: Cords;
  selectedElement: HTMLElement;
};

export const getSelectElementToolbarCoordinates = ({
  editorContentRef,
}: GetSelectedElementOptionsCoordinatesUtilProps): Nullable<GetSelectElementToolbarCoordinatesUtilResponse> => {
  const editorContentElement = editorContentRef.current;
  const selectedElement = editorContentElement?.querySelector(
    ".ProseMirror-selectednode"
  );

  if (!(selectedElement instanceof HTMLElement)) {
    return null;
  }

  return {
    selectElementToolbarCoordinates: selectedElement.getBoundingClientRect(),
    selectedElement: selectedElement,
  };
};
