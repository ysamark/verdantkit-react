import { createContext } from "react";
import { SelectFieldContextDataObject } from "./types";

export const SelectFieldContext = createContext<SelectFieldContextDataObject>(
  {} as SelectFieldContextDataObject
);

type SelectFieldContextProviderProps = React.PropsWithChildren<{
  value: SelectFieldContextDataObject;
}>;

export const SelectFieldContextProvider = (
  props: SelectFieldContextProviderProps
) => {
  return <SelectFieldContext.Provider {...props} />;
};
