import { createContext } from "react";

import { DropDownContextDataObject } from "./types";

export const DropDownContext = createContext<DropDownContextDataObject>(
  {} as DropDownContextDataObject
);

type DropDownContextProviderProps = React.PropsWithChildren<{
  value: DropDownContextDataObject;
}>;

type DropDownContextProviderComponent =
  React.FunctionComponent<DropDownContextProviderProps>;

export const DropDownContextProvider: DropDownContextProviderComponent = (
  props
) => {
  return <DropDownContext.Provider {...props} />;
};
