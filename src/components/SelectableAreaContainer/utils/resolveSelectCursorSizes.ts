import { Nullish } from "@verdantkit/utils";

import {
  CursorStyle,
  Sizes,
} from "@components/SelectableAreaContainer/SelectCursor/types";

type ResolveSelectCursorSizeUtilProps = Sizes & {
  cursorStyle?: Nullish<CursorStyle>;
};

export const resolveSelectCursorSizes = ({
  width,
  height,
  cursorStyle,
}: ResolveSelectCursorSizeUtilProps): Sizes => {
  if (cursorStyle !== "radial") {
    return { width, height };
  }

  if (width >= height) {
    return {
      width,
      height: width,
    };
  }

  return {
    height,
    width: height,
  };
};
