import { ChainedCommands } from "@tiptap/react";

import { FontAwesome6IconName } from "~/types";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  icon?: FontAwesome6IconName;
  label?: string;
  dropdown?: boolean;
  dropdownStyle?: "standard" | "dialog";
  dropdownWidth?: number;
  onClick?: (chain: ChainedCommands) => ChainedCommands | void;
};
