import { NotionRichTextFieldProps } from "./Notion/types";
import { StandardRichTextFieldProps } from "./Standard/types";

// type PropsForStandardRichTextField = Partial<{
//   style: "standard";
// }> &
//   StandardRichTextFieldProps;

// type PropsForNotionRichTextField = {
//   style: "notion";
// } & NotionRichTextFieldProps;

export type RichTextFieldOutputFormat = "json" | "text" | "html";

export type RichTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    style: "standard" | "notion";
    format: RichTextFieldOutputFormat;
    name: string;
  }> &
  (StandardRichTextFieldProps | NotionRichTextFieldProps);
