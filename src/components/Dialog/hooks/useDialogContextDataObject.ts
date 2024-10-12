import { Nullish } from "@verdantkit/utils";
import { useState } from "react";

import {
  DialogBoxSize,
  DialogContextDataObject,
  DialogProps,
} from "@components/Dialog/types";
import { StateSetter } from "~/types";

export const useDialogContextDataObject = (
  props: DialogProps,
  setShow: StateSetter<boolean>
): DialogContextDataObject => {
  const [size, setSize] = useState<DialogBoxSize>(props.size ?? "medium");
  const [title, setTitle] = useState<Nullish<string>>(props.title);

  return {
    size,
    setSize,
    title,
    setTitle,
    close() {
      setShow(false);

      const dialogCloseHandler = props.onClose;

      if (typeof dialogCloseHandler === "function") {
        dialogCloseHandler();
      }
    },
    open() {
      setShow(true);
    },
  };
};
