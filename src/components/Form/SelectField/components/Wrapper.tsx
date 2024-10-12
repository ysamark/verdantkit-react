import { SelectFieldContextProvider } from "@components/Form/SelectField/context";
import { useSelectFieldDataObject } from "@components/Form/SelectField/hooks";
import { SelectFieldData } from "@components/Form/SelectField/types";

type WrapperProps = React.PropsWithChildren<{
  data: SelectFieldData;
}>;

type WrapperComponent = React.FunctionComponent<WrapperProps>;

export const Wrapper: WrapperComponent = (props) => {
  const selectFieldContextDataObject = useSelectFieldDataObject(props.data);

  return (
    <SelectFieldContextProvider value={selectFieldContextDataObject}>
      {props.children}
    </SelectFieldContextProvider>
  );
};
