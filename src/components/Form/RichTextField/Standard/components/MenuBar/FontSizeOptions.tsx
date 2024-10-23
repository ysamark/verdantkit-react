import { Fragment } from "react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";

export const FontSizeOptions = () => {
  const { editor } = useStandardRichTextFieldContext();

  const fontSizeInputChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;
    const inputElementValue = Number(inputElement.value.trim());

    if (editor) {
      editor.chain().setFontSize(`${inputElementValue}pt`);
    }
  };

  const getFontSize = () => {
    if (!editor) {
      return 0;
    }

    return 0;
  };

  return (
    <Fragment>
      <EditorMenuListItem>
        <Button icon="FaMinus" />
      </EditorMenuListItem>
      <EditorMenuListItem>
        <input
          type="text"
          value={getFontSize()}
          onChange={fontSizeInputChangeHandler}
          className="w-10 border-solid border-[1px] border-zinc-700 dark:bg-zinc-800 h-8 outline-0 px-3 rounded-md text-center"
        />
      </EditorMenuListItem>
      <EditorMenuListItem>
        <Button icon="FaPlus" />
      </EditorMenuListItem>
    </Fragment>
  );
};
