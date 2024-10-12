import { Meta, StoryObj } from "@storybook/react";

import { CheckButton } from "@components/Form/CheckButton";

const meta: Meta<typeof CheckButton> = {
  title: "components/Form/CheckButton",
  component: CheckButton,
  args: {
    children: ["Select this item"],
  },
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
