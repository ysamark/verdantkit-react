import { forwardRef } from "react";
import { NotionRichTextField } from "./Notion";
import { StandardRichTextField } from "./Standard";
import { RichTextFieldProps } from "./types";

export * from "./Notion";
export * from "./Standard";

export const RichTextField = forwardRef<HTMLInputElement, RichTextFieldProps>(
  function RichTextField({ style, ...props }, ref) {
    switch (style) {
      case "notion":
        return <NotionRichTextField {...props} />;

      default:
        return <StandardRichTextField {...props} ref={ref} />;
    }
  }
);
