import { SelectableElementsContextProvider } from "./context";
import { useSelectableAreaContextDataObject } from "./hooks";

type SelectableAreaProps = React.PropsWithChildren;

type SelectableAreaComponent = React.FunctionComponent<SelectableAreaProps>;

export * from "@components/SelectableAreaContainer";
export * from "@components/SelectableElement";
export * from "./hooks";

export const SelectableArea: SelectableAreaComponent = ({ children }) => {
  const selectableAreaContextDataObject = useSelectableAreaContextDataObject();

  return (
    <SelectableElementsContextProvider value={selectableAreaContextDataObject}>
      {children}
    </SelectableElementsContextProvider>
  );
};
