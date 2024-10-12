import { Nullish } from "@verdantkit/utils";
import { FontAwesome6IconName } from "~/types";

export type OptionProps = {
  value?: unknown;
  label: string;
  options?: SelectFieldData;
  icon?: FontAwesome6IconName;
  selected?: Nullish<boolean>;
  onSelect?: (props: OptionProps) => void;
  onOpen?: (props: OptionProps) => void;
};

export type SelectFieldData = Array<OptionProps>;

export type SelectEventHandler = (option: OptionProps) => void;

export type SelectFieldProps<DataType = unknown> =
  React.InputHTMLAttributes<HTMLInputElement> &
    React.PropsWithChildren<{
      data?: Array<DataType>;
      label?: string;
      onChange?: (selected: DataType) => void;
    }>;

export type SelectFieldComponent<DataType = unknown> = React.FunctionComponent<
  SelectFieldProps<DataType>
>;

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type ListHeight = "unset" | number;

export type ListDataStack = Array<SelectFieldData>;

export type SelectFieldContextDataObject = {
  query: string;
  setQuery: StateSetter<string>;
  typing: boolean;
  setTyping: StateSetter<boolean>;
  opened: boolean;
  setOpened: StateSetter<boolean>;
  selectedOption: Nullish<OptionProps>;
  setSelectedOption: StateSetter<Nullish<OptionProps>>;
  listDataStack: ListDataStack;
  setListDataStack: StateSetter<ListDataStack>;
  closeOnSelectFieldContainerBlurState: React.MutableRefObject<boolean>;
  resetState: () => void;
};
