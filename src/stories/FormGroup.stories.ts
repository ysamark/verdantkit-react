import { Meta, StoryObj } from "@storybook/react";

import { FormGroup } from "@components/Form/FormGroup";

const meta: Meta<typeof FormGroup> = {
  title: "components/Form/FormGroup",
  component: FormGroup,
  args: {
    title: "Dados pessoais",
  },
};

export const Default: StoryObj<typeof meta> = {};

export const WithSubTitle: StoryObj<typeof meta> = {
  args: {
    subtitle: "Insira seus dados pessoais",
  },
};

export const WithSubTitleAndFooter: StoryObj<typeof meta> = {
  args: {
    subtitle: "Insira seus dados pessoais",
    footer: "Psiu...",
  },
};

export default meta;
