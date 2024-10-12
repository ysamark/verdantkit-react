import { Meta, StoryObj } from "@storybook/react";

import { SelectableArea } from "@components/SelectableArea";
import { SelectableAreaElement } from "./SelectableAreaElement";

const meta: Meta<typeof SelectableAreaElement> = {
  title: "components/SelectableArea",
  component: SelectableAreaElement,
  args: {
    cursorStyle: "standard",
  },
  decorators: [
    (SelectableAreaElement) => (
      <SelectableArea>{SelectableAreaElement()}</SelectableArea>
    ),
  ],
};

export const Default: StoryObj<typeof meta> = {};

export const Radial: StoryObj<typeof meta> = {
  args: {
    cursorStyle: "radial",
  },
};

export default meta;
