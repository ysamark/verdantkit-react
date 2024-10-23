import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { parseEditorValueToString } from "@components/Form/RichTextField/utils/parseEditorValueToString";
import { forwardRef } from "react";

export const EditorOutput = forwardRef<HTMLInputElement>((_props, ref) => {
  const { props, editor } = useStandardRichTextFieldContext();

  if (!editor) {
    return null;
  }

  return (
    <input
      type="hidden"
      readOnly
      ref={ref}
      name={props.name}
      value={parseEditorValueToString(editor, props.format)}
    />
  );
});
