import { forwardRef } from "react";

import {
  DropDown,
  DropDownButton,
  DropDownButtonProps,
  DropDownContent,
} from "@components/DropDown";

export type ButtonDropDownProps = Omit<DropDownButtonProps, "content"> & {
  content: React.ElementType;
};

export const ButtonDropDown = forwardRef<
  HTMLButtonElement,
  ButtonDropDownProps
>(function ButtonDropDown({ content: Content, ...props }, ref) {
  return (
    <DropDown>
      <DropDownButton {...props} ref={ref} />
      {/* {(props.asChild && children) || (
          <button {...props} type="button" role="button">
            {children}
          </button>
        )}
      </DropDownButton> */}
      <DropDownContent>
        <Content />
      </DropDownContent>
    </DropDown>
  );
});
