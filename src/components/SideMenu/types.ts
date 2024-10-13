import { Nullish } from "@verdantkit/utils";

import { StateSetter } from "~/types";

export type SideMenuPosition = "left" | "right";

export type SideMenuProps = React.PropsWithChildren<{
  position?: Nullish<SideMenuPosition>;
}>;

export type SideMenuContextDataObject = {
  props: SideMenuProps;
  visible: boolean;
  hidden: boolean;
  open: () => void;
  close: () => void;
  setVisible: StateSetter<boolean>;
};
