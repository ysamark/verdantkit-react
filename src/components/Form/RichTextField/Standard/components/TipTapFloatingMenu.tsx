import { FloatingMenu } from "@tiptap/react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

export const TipTapFloatingMenu = () => {
  const { editor } = useStandardRichTextFieldContext();

  if (!editor) {
    return null;
  }

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div>
        <button>Hey: FloatingMenu here</button>
      </div>
    </FloatingMenu>
  );
};
