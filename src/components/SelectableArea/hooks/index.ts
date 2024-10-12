import { useContext } from "react";

import { SelectableElementsContext } from "../context";

export * from "./useSelectableAreaContextDataObject";

export const useSelectableArea = () => useContext(SelectableElementsContext);
