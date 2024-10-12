import {
  Tooltip as Root,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ui@components/tooltip";

type ToolProps = React.PropsWithChildren<{
  text: string | number;
}>;

type TooltipComponent = React.FunctionComponent<ToolProps>;

export const Tooltip: TooltipComponent = (props) => {
  return (
    <TooltipProvider>
      <Root>
        <TooltipTrigger asChild={true}>{props.children}</TooltipTrigger>
        <TooltipContent>
          <p>{props.text}</p>
        </TooltipContent>
      </Root>
    </TooltipProvider>
  );
};
