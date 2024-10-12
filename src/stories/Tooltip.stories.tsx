import { Meta, StoryObj } from "@storybook/react";

import { TooltipElement } from "./TooltipElement";

const meta: Meta<typeof TooltipElement> = {
  title: "components/Tooltip",
  component: TooltipElement,
  args: {},
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
