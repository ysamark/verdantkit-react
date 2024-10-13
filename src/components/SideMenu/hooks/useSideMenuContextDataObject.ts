import { useState } from "react";

import {
  SideMenuContextDataObject,
  SideMenuProps,
} from "@components/SideMenu/types";

type UseSideMenuContextDataObjectHook = (
  props: SideMenuProps
) => SideMenuContextDataObject;

export const useSideMenuContextDataObject: UseSideMenuContextDataObjectHook = (
  props
) => {
  const [visible, setVisible] = useState<boolean>(false);

  return {
    props,
    visible,
    hidden: !visible,
    setVisible,
    close() {
      setVisible(false);
    },
    open() {
      setVisible(true);
    },
  };
};
