import { createContext } from "react";

import { DropZoneContextDataObject } from "./types";

export const DropZoneContext = createContext<DropZoneContextDataObject>(
  {} as DropZoneContextDataObject
);

type DropZoneContextProviderProps = React.PropsWithChildren<{
  value: DropZoneContextDataObject;
}>;

type DropZoneContextProviderComponent =
  React.FunctionComponent<DropZoneContextProviderProps>;

export const DropZoneContextProvider: DropZoneContextProviderComponent = (
  props
) => {
  return <DropZoneContext.Provider {...props} />;
};
