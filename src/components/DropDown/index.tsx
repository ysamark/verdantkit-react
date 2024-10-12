import { DropDownWrapper } from "./components/DropDownWrapper";
import { DropDownContextProvider } from "./context";
import { useDropDownContextDataObject } from "./hooks";
import { DropDownProps } from "./types";

type DropDownComponent = React.FunctionComponent<DropDownProps>;

export * from "./components";
export * from "./types";

export const DropDown: DropDownComponent = (props) => {
  const context = useDropDownContextDataObject(props);

  return (
    <DropDownContextProvider value={context}>
      <DropDownWrapper />
    </DropDownContextProvider>
  );
};
