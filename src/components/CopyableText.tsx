import { generateRandomId, noEmpty, Nullish } from "@verdantkit/utils";
import { Fragment, isValidElement } from "react";
import { FaCopy } from "react-icons/fa6";

type CopyableTextProps = {
  asChild?: boolean;
  data?: Nullish<string | number>;
};

type CopyableTextComponent = React.FunctionComponent<
  React.PropsWithChildren<CopyableTextProps>
>;

export const CopyableText: CopyableTextComponent = (props) => {
  const copyButtonClickHandler: React.MouseEventHandler = function (event) {
    const resolveTextContent = (): Nullish<string> => {
      if (noEmpty(props.data)) {
        return props.data;
      }

      const buttonElement = event.target as HTMLButtonElement;
      const parentElement = buttonElement.parentNode;

      if (parentElement instanceof HTMLElement) {
        return parentElement.innerText;
      }
    };

    const shouldCopyText = Boolean(
      navigator.clipboard && typeof navigator.clipboard.writeText === "function"
    );

    const textContent = resolveTextContent();

    if (shouldCopyText && noEmpty(textContent)) {
      navigator.clipboard.writeText(textContent);
    }
  };

  const copyButtonElement = (
    <button
      className="text-zinc-700 dark:text-zinc-300 ml-1 cursor-pointer hover:opacity-95 hover:scale-105 inline-flex bg-transparent outline-none border-0"
      onClick={copyButtonClickHandler}
      title="Copiar informação"
      type="button"
      role="button"
      key={generateRandomId()}
    >
      <FaCopy className="pointer-events-none" />
    </button>
  );

  const children =
    props.children instanceof Array ? props.children : [props.children];

  return (
    <Fragment>
      {children.slice(0, 1).map((child, childIndex) => {
        if (isValidElement(child)) {
          const childProps = (child.props as React.PropsWithChildren) ?? {
            children: [],
          };

          const childChildren =
            "children" in childProps && childProps.children instanceof Array
              ? childProps.children
              : [childProps.children];

          return {
            ...child,
            props: {
              ...childProps,
              key: childIndex,
              children: [...childChildren, copyButtonElement],
            },
          };
        }

        return (
          <Fragment key={childIndex}>
            {child} {copyButtonElement}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
