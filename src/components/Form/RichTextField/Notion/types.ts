export type NotionRichTextFieldProps =
  React.InputHTMLAttributes<HTMLInputElement> &
    React.PropsWithChildren<
      Partial<{
        defaultValue: string;
      }>
    >;
