import { Meta, StoryObj } from "@storybook/react";

import { NavigationElement } from "./NavigationElement";

const meta: Meta<typeof NavigationElement> = {
  title: "components/Navigation",
  component: NavigationElement,
  args: {},
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
