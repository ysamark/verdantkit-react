import { noEmpty, Nullish, Optional, stripStrAccents } from "@verdantkit/utils";
import React, { isValidElement } from "react";

export const cn = (...args: Array<Nullish>) => {
  const classList: Array<string> = [];

  args
    .filter((arg) => noEmpty(arg))
    .join(" ")
    .split(" ")
    .forEach((classListItem) => {
      if (classList.includes(classListItem)) {
        classList.splice(classList.indexOf(classListItem), 1);
      }

      classList.push(classListItem);
    });

  return classList.join(" ");
};

export const sanitizeSlagTitle = (slag: string) => {
  const spaceRe = /\s+/;

  return stripStrAccents(
    String(slag)
      .toLowerCase()
      .split(spaceRe)
      .filter((slice) => !spaceRe.test(slice))
      .join("")
  );
};

export const getReactElement = (
  children: React.ReactNode,
  elementType: React.ElementType
): Optional<React.ReactElement> => {
  const element = React.Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === elementType
  );

  return isValidElement(element) ? element : undefined;
};

export const getReactElements = (
  children: React.ReactNode,
  elementType: React.ElementType
) => {
  const element = React.Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === elementType
  );

  return element;
};

type GroupReactElementsUtil = (
  children: React.ReactNode,
  elementTypes: Array<
    React.ElementType | string | React.JSXElementConstructor<any>
  >
) => [
  Array<
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
  >,
  Array<React.ReactNode>
];

export const groupReactElements: GroupReactElementsUtil = (
  children,
  elementTypes
) => {
  const elements = React.Children.toArray(children).filter(
    (child) => isValidElement(child) && elementTypes.includes(child.type)
  );

  const rest = React.Children.toArray(children).filter(
    (child) => !(isValidElement(child) && elementTypes.includes(child.type))
  );

  return [elements, rest];
};
