import { ElementType } from "react";

import { SelectedElementId } from "@components/SelectableArea/types";
import { useSelectableArea } from "~/components/SelectableArea/hooks";

import { SelectableElementContextProvider } from "./context";
import { SelectableElementContextDataObject } from "./types";

type SelectableElementProps = React.PropsWithChildren<{
  id: SelectedElementId;
  selected?: boolean;
  element?: ElementType<SelectableElementContextDataObject>;
}>;

type SelectableElementComponent =
  React.FunctionComponent<SelectableElementProps>;

export * from "./context";
export * from "./hook";

export const SelectableElement: SelectableElementComponent = (props) => {
  const context = useSelectableArea();

  if (!context.selectedElements) {
    throw new Error(
      "SelectableElement cannot be used outside a SelectableArea"
    );
  }

  const selected = context.isElementSelected(props.id);

  const selectableElementContextDataObject: SelectableElementContextDataObject =
    {
      selected,

      inputProps: {
        type: "checkbox",
        checked: selected,
        onChange() {
          if (context.isElementSelected(props.id)) {
            return context.deselectElement(props.id);
          }

          context.selectElement(props.id);
        },
      },
    };

  const Element = props.element;

  return (
    <SelectableElementContextProvider
      value={selectableElementContextDataObject}
    >
      {!Element ? (
        props.children
      ) : (
        <Element {...selectableElementContextDataObject} />
      )}
    </SelectableElementContextProvider>
  );
};
