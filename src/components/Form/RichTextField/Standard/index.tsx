import { forwardRef } from "react";
import { StandardRichTextFieldContent } from "./content";
import { StandardRichTextFieldContextProvider } from "./context";
import { useStandardRichTextFieldContextData } from "./hooks/useStandardRichTextFieldContextData";
import { StandardRichTextFieldProps } from "./types";

// const TipTapFontSizeGetterExtension = Extension.create({
//   name: 'getFontSize',
//   addOptions() {
//     return {
//       types: ['textStyle']
//     }
//   },
//   addGlobalAttributes() {
//     return [
//       {
//         types: [],
//         attributes: {}
//       }
//     ]
//   },
//   addCommands() {
//     return {
//       getFontSize: () => ({ chain }) => 0
//     }
//   },
// })

export * from "./types";

export const StandardRichTextField = forwardRef<
  HTMLInputElement,
  StandardRichTextFieldProps
>(function (props, ref) {
  const standardRichTextFieldContextData =
    useStandardRichTextFieldContextData(props);

  return (
    <StandardRichTextFieldContextProvider
      value={standardRichTextFieldContextData}
    >
      <StandardRichTextFieldContent ref={ref} />
    </StandardRichTextFieldContextProvider>
  );
});
