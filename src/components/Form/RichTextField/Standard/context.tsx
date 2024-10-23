import { createContext } from "react";
import { StandardRichTextFieldContextProps } from "./types";

export const StandardRichTextFieldContext =
  createContext<StandardRichTextFieldContextProps>(
    {} as StandardRichTextFieldContextProps
  );

type StandardRichTextFieldContextProviderProps = {
  value: StandardRichTextFieldContextProps;
};

type StandardRichTextFieldContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & StandardRichTextFieldContextProviderProps
>;

export const StandardRichTextFieldContextProvider: StandardRichTextFieldContextProviderComponent =
  ({ value, ...props }) => {
    return (
      <StandardRichTextFieldContext.Provider value={value}>
        {props.children}
      </StandardRichTextFieldContext.Provider>
    );
  };
