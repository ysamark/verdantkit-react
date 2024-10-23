import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { Button } from "./Button";
import { TextFormattingButtonsWrapper } from "./TextFormattingButtonsWrapper";

export const TextFormattingButtons = () => {
  const { activeClass } = useStandardRichTextFieldContext();

  return (
    <TextFormattingButtonsWrapper>
      <Button
        icon="FaBold"
        title="Formatar texto em negrito"
        onClick={(chain) => chain.toggleBold().focus()}
        className={activeClass("bold")}
      />
      <Button
        icon="FaItalic"
        title="Formatar texto em itálico"
        onClick={(chain) => chain.toggleItalic().focus()}
        className={activeClass("italic")}
      />
      <Button
        icon="FaUnderline"
        title="Sublinhar texto"
        onClick={(chain) => chain.focus().toggleUnderline()}
        className={activeClass("underline")}
      />
      <Button
        icon="FaStrikethrough"
        title="Borrar texto"
        onClick={(chain) => chain.toggleStrike().focus()}
        className={activeClass("strike")}
      />
    </TextFormattingButtonsWrapper>
  );
};
