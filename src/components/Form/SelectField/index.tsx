import { SelectFieldElement } from "./components/SelectFieldElement";
import { Wrapper } from "./components/Wrapper";
import { OptionProps, SelectFieldComponent } from "./types";

export * from "./types";

export const SelectField: SelectFieldComponent<OptionProps> = (props) => {
  const data = props.data ?? [];

  return (
    <Wrapper data={data}>
      <div className="w-full h-auto mb-4 block relative">
        <SelectFieldElement />
      </div>
    </Wrapper>
  );
};
