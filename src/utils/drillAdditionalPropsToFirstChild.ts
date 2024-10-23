import { noEmpty } from "@verdantkit/utils";
import React from "react";

import { cn } from "@lib/utils";

const resolveReactElementProps = (
  element: React.ReactNode | React.ReactElement
) => {
  return typeof element === "object" &&
    element &&
    "props" in element &&
    element.props
    ? element.props
    : {};
};

type Props<T extends object = object> = React.PropsWithChildren<{
  props: T;
}>;

export const drillAdditionalPropsToFirstChild = <T extends object = object>({
  children,
  props,
}: Props<T>) => {
  const [child, ...rest] = React.Children.toArray(children);

  if (!React.isValidElement(child)) {
    return [child, ...rest];
  }

  const childProps = resolveReactElementProps(child);

  const childElement = {
    ...child,
    props: {
      ...childProps,
      ...props,
      className: cn(
        childProps.className,
        props &&
          typeof props === "object" &&
          "className" in props &&
          noEmpty(props.className)
          ? props.className
          : null
      ),
    },
  };

  return [childElement, ...rest];
};
