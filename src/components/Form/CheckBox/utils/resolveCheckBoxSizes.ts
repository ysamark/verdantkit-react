import { Optional } from "@verdantkit/utils";

import { checkBoxPresetSizes } from "@components/Form/CheckBox/config";
import {
  CheckBoxPresetSize,
  CheckBoxSize,
} from "@components/Form/CheckBox/types";
import { Sizes } from "@components/SelectableAreaContainer/SelectCursor/types";

import { getSizeValues } from "./getSizeValues";

export const resolveCheckBoxSizes = (size: Optional<CheckBoxSize>): Sizes => {
  if (
    ["string", "number"].includes(typeof size) &&
    /^([0-9_.])$/.test(String(size))
  ) {
    const [width, height] = getSizeValues(Number(size));

    return { width, height };
  }

  const checkBoxSizeKey: CheckBoxPresetSize =
    size && size in checkBoxPresetSizes
      ? (size as CheckBoxPresetSize)
      : "medium";
  const checkBoxSize = checkBoxPresetSizes[checkBoxSizeKey];

  const [width, height] = getSizeValues(checkBoxSize);

  return { width, height };
};
