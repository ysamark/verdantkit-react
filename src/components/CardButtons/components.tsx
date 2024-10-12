import { cn } from "~/utils";

type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonElement = (props: ButtonElementProps) => {
  return (
    <button
      {...props}
      className={cn("border-0 outline-none cursor-pointer", props.className)}
    />
  );
};
