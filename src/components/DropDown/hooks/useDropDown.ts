import { useContext } from "react";

import { DropDownContext } from "@components/DropDown/context";

export const useDropDown = () => useContext(DropDownContext);
