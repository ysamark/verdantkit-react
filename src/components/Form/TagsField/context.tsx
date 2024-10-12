import { createContext } from "react";

import { TagsFieldContextDataObject } from "./types.context";

export const TagsFieldContext = createContext<TagsFieldContextDataObject>(
  {} as TagsFieldContextDataObject
);

type TagsFieldContextProviderProps = React.PropsWithChildren<{
  value: TagsFieldContextDataObject;
}>;

type TagsFieldContextProviderComponent =
  React.FunctionComponent<TagsFieldContextProviderProps>;

export const TagsFieldContextProvider: TagsFieldContextProviderComponent = (
  props
) => <TagsFieldContext.Provider {...props} />;
