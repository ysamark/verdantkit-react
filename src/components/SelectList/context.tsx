import { createContext } from "react";

import { SelectListContextDataObject } from "./types";

export const SelectListContext = createContext<SelectListContextDataObject>(
  {} as SelectListContextDataObject
);

type SelectListContextProviderProps<ListDataType = any> =
  React.PropsWithChildren<{
    value: SelectListContextDataObject<ListDataType>;
  }>;

export const SelectListContextProvider = function <ListDataType = any>(
  props: SelectListContextProviderProps<ListDataType>
) {
  return <SelectListContext.Provider {...props} />;
};
