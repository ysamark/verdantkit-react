import { createContext } from "react";

import { SideMenuContextDataObject } from "./types";

export const SideMenuContext = createContext<SideMenuContextDataObject>(
  {} as SideMenuContextDataObject
);

type SideMenuContextProviderProps = React.PropsWithChildren<{
  value: SideMenuContextDataObject;
}>;

type SideMenuContextProviderComponent =
  React.FunctionComponent<SideMenuContextProviderProps>;

export const SideMenuContextProvider: SideMenuContextProviderComponent = (
  props
) => {
  return <SideMenuContext.Provider {...props} />;
};
