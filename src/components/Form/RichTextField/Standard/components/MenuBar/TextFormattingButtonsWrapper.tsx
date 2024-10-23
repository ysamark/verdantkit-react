import { Fragment } from "react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

import { Button } from "./Button";

export const TextFormattingButtonsWrapper = (
  props: React.PropsWithChildren
) => {
  const { fixed, editorWidth } = useStandardRichTextFieldContext();

  const children =
    props.children instanceof Array ? props.children : [props.children];

  if ((fixed && editorWidth >= 650) || editorWidth >= 650) {
    return (
      <Fragment>
        {children
          // .filter(child => Boolean(child))
          .map((child, childIndex) => (
            <li
              className="inline-flex relative flex-col items-center"
              key={childIndex}
            >
              {child}
            </li>
          ))}
      </Fragment>
    );
  }

  return (
    <li className="inline-flex relative flex-col items-center">
      <Button icon="FaT" title="Formatar texto" dropdown>
        {props.children}
      </Button>
    </li>
  );
};
