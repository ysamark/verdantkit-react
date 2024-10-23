import { ChainedCommands } from "@tiptap/react";

import { Button } from "@components/Form/RichTextField/Standard/components/MenuBar/Button";
import { EditorMenuListItem } from "@components/Form/RichTextField/Standard/components/MenuBar/EditorMenuListItem";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { FontAwesome6IconName } from "~/types";

type TextAlign = "center" | "left" | "right" | "justify";

export const TextAlignButtons = () => {
  const { editor, activeClass } = useStandardRichTextFieldContext();

  const resolveSelectedTextAlignIcon = (): FontAwesome6IconName => {
    const textAligns: Array<string> = ["Left", "Right", "Center", "Justify"];

    for (const textAlign of textAligns) {
      if (isTextAligned(textAlign.toLocaleLowerCase() as TextAlign)) {
        return `FaAlign${textAlign}` as FontAwesome6IconName;
      }
    }

    return "FaAlignLeft";
  };

  const toggleTextAlign = (chain: ChainedCommands, textAlign: TextAlign) => {
    if (!editor) {
      return;
    }

    const isTextAlignStyleActive = editor.isActive({ textAlign });

    if (isTextAlignStyleActive) {
      return chain.unsetTextAlign();
    }

    return chain.focus().setTextAlign(textAlign);
  };

  const isTextAligned = (textAlign: TextAlign): boolean => {
    return Boolean(editor?.isActive({ textAlign }));
  };

  return (
    <EditorMenuListItem>
      <Button
        icon={resolveSelectedTextAlignIcon()}
        dropdown={true}
        dropdownWidth={200}
      >
        <Button
          icon="FaAlignLeft"
          title="Alinhar texto a esquerda"
          onClick={(chain) => toggleTextAlign(chain, "left")}
          className={activeClass({ textAlign: "left" })}
        />
        <Button
          icon="FaAlignCenter"
          title="Alinhar texto ao centro"
          onClick={(chain) => toggleTextAlign(chain, "center")}
          className={activeClass({ textAlign: "center" })}
        />
        <Button
          icon="FaAlignRight"
          title="Alinhar texto a direita"
          onClick={(chain) => toggleTextAlign(chain, "right")}
          className={activeClass({ textAlign: "right" })}
        />
        <Button
          icon="FaAlignJustify"
          title="Justificar texto"
          onClick={(chain) => toggleTextAlign(chain, "justify")}
          className={activeClass({ textAlign: "justify" })}
        />
      </Button>
    </EditorMenuListItem>
  );
};
