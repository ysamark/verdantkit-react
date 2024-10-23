import { Editor } from "@tiptap/react";
import { Optional } from "@verdantkit/utils";

import { RichTextFieldOutputFormat } from "@components/Form/RichTextField/types";

export type StandardRichTextFieldContextProps = {
  props: StandardRichTextFieldProps;
  fieldName?: string;
  fieldDefaultValue?: string;
  editor: Editor | null;
  editorWidth: number;
  fixed: boolean;

  toggleFixed: () => boolean;

  getEditorWidth: () => number;
  setEditorWidth: (editorWidth: number) => void;
  activeClass: (property: any) => Optional<"x-active">;
};

type ImageUploader<ArgType = any> = (
  argument: ArgType
) => string | Promise<string>;

export type FileImageUploader = ImageUploader<File>;
export type UrlImageUploader = ImageUploader<URL>;

export type StandardRichTextFieldProps =
  React.InputHTMLAttributes<HTMLInputElement> &
    Partial<{
      defaultValue: string;
      format: RichTextFieldOutputFormat;
      name: string;
      urlImageUploader: UrlImageUploader;
      fileImageUploader: FileImageUploader;
    }>;
