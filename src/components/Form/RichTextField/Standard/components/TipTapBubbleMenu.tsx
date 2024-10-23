import { BubbleMenu } from "@tiptap/react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

export const TipTapBubbleMenu = () => {
  const { editor } = useStandardRichTextFieldContext();

  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu editor={editor}>
      <button>Hey Bubble menu</button>
    </BubbleMenu>
  );
};
