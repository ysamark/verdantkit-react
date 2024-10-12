import { Meta, StoryObj } from "@storybook/react";

import { LongTextField } from "@components/Form/LongTextField";

const meta: Meta<typeof LongTextField> = {
  title: "components/Form/LongTextField",
  component: LongTextField,
  args: {
    label: "Description",
  },
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
