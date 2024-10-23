import { noEmpty } from "@verdantkit/utils";
import * as Icon from "react-icons/fa6";

import { ButtonDropDownIcon } from "@components/Form/RichTextField/Standard/components/ButtonDropDownIcon";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { ButtonWrapper } from "./ButtonWrapper";
import { ButtonProps } from "./types";

type ButtonComponent = React.FunctionComponent<ButtonProps>;

// type EditorMenuButtonDropdownWrapperProps = {
//   dropdownWidth?: number;
// };

// const DialogWrapper: React.FunctionComponent<React.PropsWithChildren> = (
//   props
// ) => {
//   return <Dialog show={false}>{props.children}</Dialog>;
// };

// const EditorMenuButtonDropdownWrapper: React.FunctionComponent<
//   React.PropsWithChildren &
//     React.HTMLAttributes<HTMLDivElement> &
//     EditorMenuButtonDropdownWrapperProps
// > = ({ children, dropdownWidth, ...props }) => {
//   return (
//     <EditorMenuButtonDropdown $width={dropdownWidth} {...props}>
//       {children}
//     </EditorMenuButtonDropdown>
//   );
// };

export const Button: ButtonComponent = (props) => {
  const { editor } = useStandardRichTextFieldContext();

  const { icon, label, dropdown, dropdownStyle, dropdownWidth, ...rest } =
    props;

  const EditorMenuButtonIcon = Icon[icon || "Fa0"];

  const buttonClickHandler: React.MouseEventHandler = () => {
    if (editor && typeof props.onClick !== "undefined") {
      const command = props.onClick(editor.chain());

      return typeof command === "object" ? command.run() : command;
    }
  };

  const isDropdown = Boolean(typeof dropdown === "boolean" && dropdown);

  return (
    <ButtonWrapper
      {...props}
      dropDownContent={props.children}
      dropdownStyle={dropdownStyle}
      dropdownWidth={dropdownWidth}
    >
      <button
        {...rest}
        type="button"
        role="button"
        className="bg-transparent border-0 outline-0 text-zinc-800 dark:text-zinc-100 flex flex-row gap-1 items-center pt-[3px] pb-0.5 px-2 rounded-md h-8 relative [&.x-active]:bg-zinc-200 dark:[&.x-active]:bg-zinc-800 enabled:hover:bg-zinc-200 enabled:active:bg-zinc-300 dark:enabled:hover:bg-zinc-700 dark:enabled:active:bg-zinc-600"
        onClick={buttonClickHandler}
      >
        {icon && (
          <i className="inline-flex text-sm">
            <EditorMenuButtonIcon />
          </i>
        )}
        {noEmpty(label) && (
          <div className="w-full inline-flex mt-[1px]">
            <span className="text-nowrap text-sm">{label}</span>
          </div>
        )}
        {isDropdown && <ButtonDropDownIcon />}
      </button>
    </ButtonWrapper>
  );
};
