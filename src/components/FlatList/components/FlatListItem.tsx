import { Fragment, isValidElement } from "react";

import { useFlatList } from "@components/FlatList/hooks";

type FlatListItemProps = {
  data: Record<string, any>;
};

type FlatListItemComponent = React.FunctionComponent<FlatListItemProps>;

export const FlatListItem: FlatListItemComponent = ({ data }) => {
  const context = useFlatList();

  if (typeof context.props.renderItem === "function") {
    return <Fragment>{context.props.renderItem(data)}</Fragment>;
  }

  const [child] =
    context.props.children instanceof Array
      ? context.props.children
      : [context.props.children];

  const childProps =
    typeof child.props === "object" && child.props ? child.props : {};

  if (isValidElement(child)) {
    return {
      ...child,
      props: {
        ...childProps,
        ...data,
      },
    };
  }

  return child;
};
