import { Meta, StoryObj } from "@storybook/react";

import { RichTextField } from "@components/Form/RichTextField";

const meta: Meta<typeof RichTextField> = {
  title: "components/Form/RichTextField",
  component: RichTextField,
  args: {},
  argTypes: {
    style: {
      options: ["notion", "standard"],

      control: "select",
    },
  },
};

export const Default: StoryObj<typeof meta> = {
  args: {
    style: "standard",
  },
};

export default meta;
