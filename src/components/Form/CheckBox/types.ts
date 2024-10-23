import { Optional, ValueOf } from "@verdantkit/utils";

import { checkBoxPresetSizes, checkBoxTypes } from "./config";

export type CheckBoxType = ValueOf<typeof checkBoxTypes>;
export type CheckBoxPresetSize = keyof typeof checkBoxPresetSizes;
export type CheckBoxSize = CheckBoxPresetSize | number | `${number}`;

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> &
  Partial<{
    type: CheckBoxType;
    size: CheckBoxSize;
    label: Optional<string>;
  }>;
