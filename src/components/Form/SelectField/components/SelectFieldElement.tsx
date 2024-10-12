import { Fragment } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import { FilterInput } from "@components/Form/SelectField/components/FilterInput";
import { useSelectField } from "@components/Form/SelectField/hooks";
import {
  OptionProps,
  SelectFieldProps,
} from "@components/Form/SelectField/types";
import { resolveDefaultValue } from "@components/Form/SelectField/utils/resolveDefaultValue";

import { SelectFieldElementContainer } from "./SelectFieldElementContainer";
import { SelectList } from "./SelectList";

export const SelectFieldElement = function (
  props: SelectFieldProps<OptionProps>
) {
  const context = useSelectField();

  const Icon = context.opened ? FaAngleUp : FaAngleDown;

  const defaultOption = resolveDefaultValue(
    props.defaultValue,
    props.data ?? []
  );

  const resolveFieldLabel = (): string => {
    if (context.selectedOption) {
      return context.selectedOption.label;
    }

    if (defaultOption) {
      return defaultOption.label;
    }

    return typeof props.label === "string" && /\S/.test(props.label)
      ? props.label
      : "Selecionar";
  };

  const resolveFieldValue = (): string => {
    if (context.selectedOption) {
      return String(context.selectedOption.value);
    }

    if (defaultOption) {
      return String(defaultOption.value);
    }

    return "";
  };

  return (
    <Fragment>
      <input {...props} value={resolveFieldValue()} type="hidden" readOnly />
      <SelectFieldElementContainer>
        <div className="w-full h-auto block">
          <div className="w-full flex flex-row items-center justify-start">
            <div className="dark:text-zinc-50 w-full inline-flex flex-row items-center">
              {(context.typing && <FilterInput />) || (
                <span className="w-full block whitespace-nowrap overflow-hidden text-ellipsis">
                  {resolveFieldLabel()}
                </span>
              )}
            </div>
            <div className="pl-4 inline-flex items-center text-zinc-700">
              <Icon />
            </div>
          </div>
        </div>
      </SelectFieldElementContainer>
      {context.opened && <SelectList />}
    </Fragment>
  );
};
