import { Meta, StoryObj } from "@storybook/react";

import { FlatListElement } from "./FlatListElement";

const meta: Meta<typeof FlatListElement> = {
  title: "components/FlatList",
  component: FlatListElement,

  args: {
    paginationStyle: "standard",
    itemsCountPerIteration: 8,
  },

  argTypes: {
    paginationStyle: {
      options: ["standard", "client-demand", "infinite-scroll"],
      control: "select",
    },
  },
};

export const Default: StoryObj<typeof meta> = {
  args: {
    paginationStyle: "standard",
  },
};

export const WithNoSearchBox: StoryObj<typeof meta> = {
  args: {
    showSearchBox: false,
  },
};

export const ClientDemandPagination: StoryObj<typeof meta> = {
  args: {
    paginationStyle: "client-demand",
  },
};

export const InfiniteScrollPagination: StoryObj<typeof meta> = {
  args: {
    paginationStyle: "infinite-scroll",
  },
};

export default meta;
