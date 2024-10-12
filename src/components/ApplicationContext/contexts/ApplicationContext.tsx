import { createContext } from "react";

import { ApplicationContextDataObject } from "../types";

export const ApplicationContext = createContext<ApplicationContextDataObject>(
  {} as ApplicationContextDataObject
);

type ApplicationContextProviderProps = React.PropsWithChildren<{
  value: ApplicationContextDataObject;
}>;

type ApplicationContextProviderComponent =
  React.FunctionComponent<ApplicationContextProviderProps>;

export const ApplicationContextProvider: ApplicationContextProviderComponent = (
  props
) => {
  return <ApplicationContext.Provider {...props} />;
};
