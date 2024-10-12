import { Meta, StoryObj } from "@storybook/react";

import { SelectListElement } from "./SelectListElement";

const meta: Meta<typeof SelectListElement> = {
  title: "components/SelectList",
  component: SelectListElement,

  argTypes: {
    listPaginationStyle: {
      control: "select",
      options: ["standard", "infinite-scroll", "client-demand"],
    },
  },
};

export const Loading: StoryObj<typeof meta> = {
  args: {
    loading: true,
  },
};

export const Default: StoryObj<typeof meta> = {
  args: {
    loading: false,
  },
};

export const Multiple: StoryObj<typeof meta> = {
  args: {
    loading: false,
    multiple: true,
    listPaginationStyle: "client-demand",
  },
};

export const StandardPaginationLoading: StoryObj<typeof meta> = {
  args: {
    loading: true,
    listPaginationStyle: "standard",
  },
};

export const StandardPaginationDefault: StoryObj<typeof meta> = {
  args: {
    loading: false,
    listPaginationStyle: "standard",
  },
};

export const StandardPaginationMultiple: StoryObj<typeof meta> = {
  args: {
    loading: false,
    multiple: true,
    listPaginationStyle: "standard",
  },
};

export default meta;
