import { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@components/Form/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "components/Form/DatePicker",
  component: DatePicker,
  args: {},
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
