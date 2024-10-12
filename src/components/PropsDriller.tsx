import React, { Fragment } from "react";

type PropsDrillerProps = React.PropsWithChildren & {
  [key: string]: unknown;
};

type PropsDrillerComponent = React.FunctionComponent<PropsDrillerProps>;

export const PropsDriller: PropsDrillerComponent = ({ children, ...props }) => {
  const propsDrillerChildren =
    children instanceof Array ? children : [children];

  return (
    <Fragment>
      {propsDrillerChildren
        .filter((child) => !!child)
        .map((child, childIndex) => {
          if (typeof child !== "object") {
            return child;
          }

          const childChildren =
            child.props.children instanceof Array
              ? child.props.children
              : [child.props.children];

          return {
            ...child,
            props: {
              ...child.props,
              ...props,
              key: childIndex,
              children: childChildren.map(
                (grandChild: React.ReactElement, grandChildIndex: number) => {
                  if (!(grandChild && typeof grandChild === "object")) {
                    return grandChild;
                  }

                  return React.createElement(
                    PropsDriller,
                    {
                      ...props,
                      key: grandChildIndex,
                    },
                    grandChild
                  );
                }
              ),
            },
          };
        })}
    </Fragment>
  );
};
