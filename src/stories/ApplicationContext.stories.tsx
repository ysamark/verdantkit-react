import { Meta, StoryObj } from "@storybook/react";

import { ApplicationContext } from "@components/ApplicationContext";

import { ApplicationContextElement } from "./ApplicationContext";

const meta: Meta<typeof ApplicationContextElement> = {
  title: "components/ApplicationContext",
  component: ApplicationContextElement,

  decorators: [
    (Story) => <ApplicationContext headers={{}}>{Story()}</ApplicationContext>,
  ],
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
