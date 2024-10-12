import { Meta, StoryObj } from "@storybook/react";

import { CopyableTextElement } from "./CopyableTextElement";

const meta: Meta<typeof CopyableTextElement> = {
  title: "components/CopyableText",
  component: CopyableTextElement,
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
