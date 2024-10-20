import { noEmpty } from "@verdantkit/utils";

import { checkBoxTypes } from "@components/Form/CheckBox/config";
import { CheckBoxType } from "@components/Form/CheckBox/types";

export const resolveInputType = (inputType?: CheckBoxType): CheckBoxType => {
  if (noEmpty(inputType) && checkBoxTypes.includes(inputType)) {
    return inputType;
  }

  return "checkbox";
};
