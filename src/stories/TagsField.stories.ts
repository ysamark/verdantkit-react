import { Meta, StoryObj } from "@storybook/react";

import { TagsField } from "@components/Form/TagsField";

const meta: Meta<typeof TagsField> = {
  title: "components/Form/TagsField",
  component: TagsField,
  args: {
    name: "post[keywords]",
  },
};

export const Default: StoryObj<typeof meta> = {};

export default meta;
