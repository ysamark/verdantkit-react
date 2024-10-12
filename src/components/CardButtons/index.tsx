type CardButtonsComponent = React.FunctionComponent<React.PropsWithChildren>;

export { CardButton } from "./CardButton";

export const CardButtons: CardButtonsComponent = (props) => {
  const children =
    props.children instanceof Array ? props.children : props.children;

  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex flex-row flex-wrap">{children}</div>
    </div>
  );
};
