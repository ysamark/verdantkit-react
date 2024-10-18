import { Nullish } from "@verdantkit/utils";

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    label: Nullish<string>;
  }>;
