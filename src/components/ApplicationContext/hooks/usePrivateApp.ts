import { useContext } from "react";

import { ApplicationPrivateContext } from "@components/ApplicationContext/contexts/ApplicationPrivateContext";

export const usePrivateApp = () => useContext(ApplicationPrivateContext);
