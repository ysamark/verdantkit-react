import { createContext } from "react";

import { ApplicationPrivateContextDataObject } from "../types";

export const ApplicationPrivateContext =
  createContext<ApplicationPrivateContextDataObject>(
    {} as ApplicationPrivateContextDataObject
  );

type ApplicationPrivateContextProviderProps = React.PropsWithChildren<{
  value: ApplicationPrivateContextDataObject;
}>;

type ApplicationPrivateContextProviderComponent =
  React.FunctionComponent<ApplicationPrivateContextProviderProps>;

export const ApplicationPrivateContextProvider: ApplicationPrivateContextProviderComponent =
  (props) => {
    return <ApplicationPrivateContext.Provider {...props} />;
  };
