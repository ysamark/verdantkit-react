import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";

export const MaximizeButton = () => {
  const { toggleFixed } = useStandardRichTextFieldContext();

  const toggleMaximizeButtonClickHandler = () => {
    toggleFixed();
  };

  return (
    <EditorMenuListItem>
      <Button icon="FaCompress" onClick={toggleMaximizeButtonClickHandler} />
    </EditorMenuListItem>
  );
};
