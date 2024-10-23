import { Fragment } from "react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";

export const HistoryButtons = () => {
  const { editor } = useStandardRichTextFieldContext();

  return (
    <Fragment>
      <EditorMenuListItem>
        <Button
          icon="FaArrowRotateLeft"
          disabled={!editor?.can().undo()}
          onClick={(chain) => chain.undo()}
        />
      </EditorMenuListItem>
      <EditorMenuListItem>
        <Button
          icon="FaArrowRotateRight"
          disabled={!editor?.can().redo()}
          onClick={(chain) => chain.redo()}
        />
      </EditorMenuListItem>
    </Fragment>
  );
};
