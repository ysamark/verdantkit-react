type AsideProps = React.PropsWithChildren;

export type AsideComponent = React.FunctionComponent<AsideProps>;

export * from "./AsideLink";
export * from "./AsideSection";

export const Aside: AsideComponent = (props) => {
  return (
    <div className="w-full h-auto flex flex-col relative">
      <div className="w-full h-auto block py-5">{props.children}</div>
    </div>
  );
};
