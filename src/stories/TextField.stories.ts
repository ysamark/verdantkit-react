import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@components/Form/TextField";

const meta: Meta<typeof TextField> = {
  title: "components/Form/TextField",
  component: TextField,
  args: {
    label: "Digite seu nome",
  },
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
