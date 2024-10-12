import { createContext } from "react";
import { DialogContextDataObject } from "./types";

export const DialogContext = createContext<DialogContextDataObject>(
  {} as DialogContextDataObject
);

type DialogContextProviderProps = React.PropsWithChildren<{
  value: DialogContextDataObject;
}>;

type DialogContextProviderComponent =
  React.FunctionComponent<DialogContextProviderProps>;

export const DialogContextProvider: DialogContextProviderComponent = (
  props
) => {
  return <DialogContext.Provider {...props} />;
};
