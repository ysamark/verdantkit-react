import { useContext } from "react";

import { StandardRichTextFieldContext } from "./context";

export const useStandardRichTextFieldContext = () =>
  useContext(StandardRichTextFieldContext);
