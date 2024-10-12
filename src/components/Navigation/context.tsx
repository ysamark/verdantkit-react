import { createContext } from "react";
import { useNavigationContextDataObject } from "./hooks";
import { NavigationContextDataObject, NavigationProps } from "./types";

export const NavigationContext = createContext<NavigationContextDataObject>(
  {} as NavigationContextDataObject
);

type NavigationContextProviderComponent =
  React.FunctionComponent<NavigationProps>;

export const NavigationContextProvider: NavigationContextProviderComponent = (
  props
) => {
  const context = useNavigationContextDataObject(props);

  return <NavigationContext.Provider {...props} value={context} />;
};
