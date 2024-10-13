import { Meta, StoryObj } from "@storybook/react";

import { SideMenuElement } from "./SideMenu";

const meta: Meta<typeof SideMenuElement> = {
  title: "components/SideMenu",
  component: SideMenuElement,
  args: {},
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
