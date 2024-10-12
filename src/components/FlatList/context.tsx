import { createContext } from "react";

import { useFlatListContextDataObject } from "./hooks";
import { FlatListContextDataObject, FlatListProps } from "./types";

export const FlatListContext = createContext<FlatListContextDataObject>(
  {} as FlatListContextDataObject
);

type FlatListContextProviderProps<Data = any> = React.PropsWithChildren<
  FlatListProps<Data>
>;

export function FlatListContextProvider<Data = any>(
  props: FlatListContextProviderProps<Data>
) {
  const context = useFlatListContextDataObject<Data>(props);

  return <FlatListContext.Provider {...props} value={context} />;
}
