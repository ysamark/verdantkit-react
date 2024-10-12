import { Nullish } from "@verdantkit/utils";

const dialogBoxSizesMap = {
  default: 720,
  small: 380,
  "x-small": 280,
  medium: 480,
  large: 620,
  "x-large": 920,
  "xx-large": 1200,
};

export type DialogBoxSize = keyof typeof dialogBoxSizesMap;

export const resolveDialogBoxSize = (
  size: Nullish<DialogBoxSize> = "default"
) => dialogBoxSizesMap[size ?? "default"];
