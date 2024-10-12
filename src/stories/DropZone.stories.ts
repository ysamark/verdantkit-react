import { Meta, StoryObj } from "@storybook/react";

import { DropZone } from "@components/DropZone";

const meta: Meta<typeof DropZone> = {
  title: "components/DropZone",
  component: DropZone,
  args: {
    accept: {
      jpeg: [".jpg"],
    },
  },
  argTypes: {
    previewStyle: {
      control: "select",
      options: ["thumbnail", "grid", "list", "thumbnail-list", "none"],
    },
  },
};

export const Default: StoryObj<typeof meta> = {};

export const GridPreview: StoryObj<typeof meta> = {
  args: {
    previewStyle: "grid",
    multiple: true,
    maxFiles: 8,
  },
};

export const ListPreview: StoryObj<typeof meta> = {
  args: {
    previewStyle: "list",
    multiple: true,
    maxFiles: 8,
  },
};

export const ThumbnailListPreview: StoryObj<typeof meta> = {
  args: {
    previewStyle: "thumbnail-list",
    multiple: true,
    maxFiles: 8,
  },
};

export default meta;
