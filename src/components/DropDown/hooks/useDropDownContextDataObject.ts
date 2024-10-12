import { useRef, useState } from "react";

import {
  DropDownContextDataObject,
  DropDownProps,
} from "@components/DropDown/types";

type UseDropDownContextDataObjectHook = (
  props: DropDownProps
) => DropDownContextDataObject;

export const useDropDownContextDataObject: UseDropDownContextDataObjectHook = (
  props
) => {
  const [show, setShow] = useState<boolean>(false);

  const buttonElementRef = useRef<HTMLButtonElement>(null);

  return {
    props,
    show,
    setShow,
    buttonElementRef,
    toggle() {
      setShow(!show);
    },
  };
};
