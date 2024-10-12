import { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  component: Spinner,
};

export const Default: StoryObj<typeof meta> = {};

export const Small: StoryObj<typeof meta> = {
  args: {
    className: "size-3",
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    className: "size-12",
  },
};

export default meta;
