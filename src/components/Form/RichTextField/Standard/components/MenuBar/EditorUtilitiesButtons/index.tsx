import { Button } from "@components/Form/RichTextField/Standard/components/MenuBar/Button";
import { EditorMenuListItem } from "@components/Form/RichTextField/Standard/components/MenuBar/EditorMenuListItem";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

export const EditorUtilitiesButtons = () => {
  const { activeClass } = useStandardRichTextFieldContext();

  return (
    <EditorMenuListItem>
      <Button icon="FaRegSquarePlus" dropdown>
        <Button
          icon="FaQuoteLeft"
          title="Inserir uma citação"
          onClick={(chain) => chain.focus().toggleBlockquote()}
          className={activeClass("blockquote")}
        />
        <Button
          icon="FaCode"
          title="Inserir bloco de texto"
          onClick={(chain) => chain.focus().toggleCodeBlock()}
          className={activeClass("codeBlock")}
        />
        <Button icon="FaLink" title="Inserir link" />
        {/* <Button icon="FaVideo" title="Inserir vídeo" /> */}
      </Button>
    </EditorMenuListItem>
  );
};
