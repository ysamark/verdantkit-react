import { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "~/components/Form/CheckBox";
import {
  checkBoxPresetSizes,
  checkBoxTypes,
} from "~/components/Form/CheckBox/config";

const meta: Meta<typeof CheckBox> = {
  title: "components/Form/CheckBox",
  component: CheckBox,
  args: {},

  argTypes: {
    type: {
      options: checkBoxTypes,
      control: "inline-radio",
    },
    size: {
      options: Object.keys(checkBoxPresetSizes),
      control: "select",
    },
  },
};

export const Default: StoryObj<typeof meta> = {
  args: {},
};

export const LabeledCheckBox: StoryObj<typeof meta> = {
  args: {
    label: "Concordo com os termos de utilização do app",
  },
};

export const Radio: StoryObj<typeof meta> = {
  args: {
    type: "radio",
  },
};

export const LabeledRadio: StoryObj<typeof meta> = {
  args: {
    type: "radio",
    label: "Concordo com os termos de utilização do app",
  },
};

export default meta;
