import { Editor } from "@tiptap/react";
import { Nullable, Optional } from "@verdantkit/utils";

import { RichTextFieldOutputFormat } from "@components/Form/RichTextField/types";

export const parseEditorValueToString = (
  editor: Nullable<Editor>,
  format: Optional<RichTextFieldOutputFormat>
): string => {
  if (!editor) {
    return "";
  }

  switch (format) {
    case "json":
      return JSON.stringify(editor.getJSON());

    case "text":
      return editor.getText();

    default:
      return encodeURIComponent(editor.getHTML());
  }
};
