import { useContext } from "react";

import { SelectListContext } from "@components/SelectList/context";

export const useSelectList = () => useContext(SelectListContext);
