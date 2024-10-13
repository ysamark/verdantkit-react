import { useContext } from "react";

import { SideMenuContext } from "@components/SideMenu/context";

export const useSideMenu = () => useContext(SideMenuContext);
