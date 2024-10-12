import { useContext } from "react";

import { DialogContext } from "@components/Dialog/context";

export * from "./useDialogContextDataObject";

export const useDialog = () => useContext(DialogContext);
