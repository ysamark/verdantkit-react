import { useState } from "react";

import {
  StandardRichTextFieldContextProps,
  StandardRichTextFieldProps,
} from "@components/Form/RichTextField/Standard/types";

import { useEditorConfig } from "./useEditorConfig";

export const useStandardRichTextFieldContextData = (
  props: StandardRichTextFieldProps
) => {
  const [fixed, setFixed] = useState<boolean>(false);
  const [editorWidth, setEditorWidth] = useState<number>(-1);

  const editor = useEditorConfig();

  const standardRichTextFieldContextData: StandardRichTextFieldContextProps = {
    props,
    editor,
    fixed,
    editorWidth,

    fieldName: props.name,
    fieldDefaultValue: props.defaultValue,

    setEditorWidth(editorWidth) {
      setEditorWidth(editorWidth);
    },

    getEditorWidth() {
      return this.editorWidth;
    },

    toggleFixed() {
      if (fixed) {
        document.body.classList.remove("overflow-y-hidden");
      } else {
        document.body.classList.add("overflow-y-hidden");
      }

      setFixed(!fixed);

      return !fixed;
    },

    activeClass: (property: any) => {
      if (!editor) {
        return undefined;
      }

      return editor.isActive(property) ? "x-active" : undefined;
    },
  };

  return standardRichTextFieldContextData;
};
