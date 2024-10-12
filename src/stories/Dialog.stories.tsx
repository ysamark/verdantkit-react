import { Meta, StoryObj } from "@storybook/react";

import { DialogElement } from "./Dialog";

const meta: Meta<typeof DialogElement> = {
  title: "components/Dialog",
  component: DialogElement,
  args: {
    show: true,
    title: "Hello, World",
  },
};

export const DefaultDialog: StoryObj<typeof meta> = {
  args: {
    size: "default",
  },
};

export const SmallDialog: StoryObj<typeof meta> = {
  args: {
    size: "small",
  },
};

export const XSmallDialog: StoryObj<typeof meta> = {
  args: {
    size: "x-small",
  },
};

export const MediumDialog: StoryObj<typeof meta> = {
  args: {
    size: "medium",
  },
};

export const LargeDialog: StoryObj<typeof meta> = {
  args: {
    size: "large",
  },
};

export const XLargeDialog: StoryObj<typeof meta> = {
  args: {
    size: "x-large",
  },
};

export const XXLargeDialog: StoryObj<typeof meta> = {
  args: {
    size: "xx-large",
  },
};

export const DefaultFit: StoryObj<typeof meta> = {
  args: {
    size: "small",
    fit: true,
    children: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
    ],
  },
};

export const DefaultFitWithFooter: StoryObj<typeof meta> = {
  args: {
    size: "small",
    fit: true,
    footer: function DialogFooter() {
      // const dialog = useDialog();

      return (
        <div className="w-full flex">
          <button
            type="button"
            onClick={() => {
              console.log("ASS");
              // dialog.setSize(dialog.size === "large" ? "small" : "large");
            }}
            className="w-full border-0 outline-0 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:scale-105 active:scale-95 transition-transform text-zinc-50 rounded-full px-5 py-2"
          >
            Ok
          </button>
        </div>
      );
    },
    children: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore. Provident, illum voluptatem perspiciatis sequi a accusantium rerum sapiente, expedita alias quia iste. At aperiam saepe repellendus id perferendis enim.",
    ],
  },
};

export default meta;
