import { useState } from "react";

import {
  SelectableAreaContextDataObject,
  SelectedElements,
} from "@components/SelectableArea/types";

export const useSelectableAreaContextDataObject =
  (): SelectableAreaContextDataObject => {
    const [selectedElements, setSelectedElements] = useState<SelectedElements>(
      []
    );

    const selectableAreaContextDataObject: SelectableAreaContextDataObject = {
      selectedElements,

      selectElement(id) {
        setSelectedElements([...selectedElements, { id }]);
      },

      deselectElement(elementId) {
        setSelectedElements(
          selectedElements.filter(
            (selectedElement) => selectedElement.id !== elementId
          )
        );
      },

      isElementSelected(elementId) {
        return selectedElements.some(
          (selectedElement) => selectedElement.id === elementId
        );
      },

      selectElements(elementsIds) {
        const newElements = elementsIds.map((id) => ({ id }));

        setSelectedElements([...selectedElements, ...newElements]);
      },

      deselectElements(elementsIds) {
        setSelectedElements(
          selectedElements.filter(
            (selectedElement) => !elementsIds.includes(selectedElement.id)
          )
        );
      },
    };

    return selectableAreaContextDataObject;
  };
