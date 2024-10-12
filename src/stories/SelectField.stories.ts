import { Meta, StoryObj } from "@storybook/react";

import { SelectField } from "@components/Form/SelectField";

const meta: Meta<typeof SelectField> = {
  title: "components/Form/SelectField",
  component: SelectField,
  args: {
    data: Array.from({ length: 5 }).map((_, i) => ({
      label: `Option number ${i}`,
      value: i,
    })),
  },
};

export const Default: StoryObj<typeof meta> = {};

export const Scrollable: StoryObj<typeof meta> = {
  args: {
    data: Array.from({ length: 60 }).map((_, i) => ({
      label: `Option number ${i}`,
      value: i,
      options: Array.from({ length: 5 }).map((_, n) => ({
        label: `Option number ${i} - ${n}`,
        value: Number(`${i}${n}`),
      })),
    })),
  },
};

export default meta;
