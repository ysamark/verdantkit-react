import { useContext } from "react";

import { ApplicationContext } from "~/components/ApplicationContext/contexts/ApplicationContext";

export const useApplicationContext = () => useContext(ApplicationContext);
