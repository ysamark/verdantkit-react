import Link from "next/link";

import { ButtonElement } from "./components";

type CardButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren<{
    href?: string;
  }>;

type CardButtonComponent = React.FunctionComponent<CardButtonProps>;

type AnchorElementComponent = React.FunctionComponent<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>;

export const CardButton: CardButtonComponent = ({ href = null, ...props }) => {
  const validHref = Boolean(typeof href === "string" && /\S/.test(href));

  const AnchorElement: AnchorElementComponent = (props) => {
    return <Link href={href || "#"} {...props} />;
  };

  const Button = validHref ? AnchorElement : ButtonElement;

  return (
    <div className="flex box-border flex-grow flex-col basis-1/2 p-1">
      <Button
        {...props}
        type="submit"
        role="button"
        className="text-zinc-800 h-full dark:text-zinc-50 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-[#151517] dark:hover:bg-[#1c1c1f] dark:active:bg-[#212125] w-full py-4 px-11 flex flex-row justify-center items-center rounded-md transition-all text-center hover:scale-100 active:scale-95"
      >
        {props.children}
      </Button>
    </div>
  );
};
