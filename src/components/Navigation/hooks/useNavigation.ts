import { useContext } from "react";

import { NavigationContext } from "@components/Navigation/context";

export const useNavigation = () => useContext(NavigationContext);
