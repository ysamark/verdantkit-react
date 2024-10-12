import { Nullish } from "@verdantkit/utils";

import { DialogBoxSize } from "./utils";

export type { DialogBoxSize } from "./utils";

export type DialogContextDataObject = {
  size: DialogBoxSize;
  setSize: React.Dispatch<React.SetStateAction<DialogBoxSize>>;
  title: Nullish<string>;
  setTitle: React.Dispatch<React.SetStateAction<Nullish<string>>>;
  close: () => void;
  open: () => void;
};

export type DialogProps = Partial<{
  show: boolean;
  size: DialogBoxSize;
  onClose: () => void;
  title: string;
  showButton: boolean;
  closeButtonLabel: string;
  fit: boolean;
  footer: React.ElementType;
}>;
