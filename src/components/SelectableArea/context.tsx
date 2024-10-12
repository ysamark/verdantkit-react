import { createContext } from "react";

import { SelectableAreaContextDataObject } from "./types";

export const SelectableElementsContext =
  createContext<SelectableAreaContextDataObject>(
    {} as SelectableAreaContextDataObject
  );

type SelectableElementsContextProviderProps = React.PropsWithChildren<{
  value: SelectableAreaContextDataObject;
}>;

type SelectableElementsContextProviderComponent =
  React.FunctionComponent<SelectableElementsContextProviderProps>;

export const SelectableElementsContextProvider: SelectableElementsContextProviderComponent =
  (props) => {
    return <SelectableElementsContext.Provider {...props} />;
  };
