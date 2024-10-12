"use client";

import { AlertDialog } from "./components/AlertDialog";
import { ApplicationContextWrapper } from "./components/ApplicationContextWrapper";
import { FormDialog } from "./components/FormDialog";
import { LoadingDialog } from "./components/LoadingDialog";
import { ApplicationContextProvider } from "./contexts/ApplicationContext";
import { ApplicationPrivateContextProvider } from "./contexts/ApplicationPrivateContext";
import { useApplicationContextDataObject } from "./hooks/useApplicationContextDataObject";
import { ApplicationContextProps } from "./types";

export * from "./contexts/ApplicationContext";
export * from "./hooks";
export * from "./types";

type ApplicationContextComponent =
  React.FunctionComponent<ApplicationContextProps>;

// type FormDialogSubmitHandler = (event: SubmitEvent) => void;
// type AlertDialogCloseHandler = (alertResponse: string) => void;

// // const LOADING_DIALOG_TIMEOUT_ON_RESOLVE = 2000; // 2s
// const FORM_DIALOG_BOX_DEFAULT_SIZE: DialogBoxSize = "large";

export const ApplicationContext: ApplicationContextComponent = (props) => {
  // const alertDialogPropsState = useRef<AlertDialogProps>();
  // const formDialogBoxSizeState = useRef<DialogBoxSize>(
  //   FORM_DIALOG_BOX_DEFAULT_SIZE
  // );
  // const formDialogCloseHandlerState = useRef<() => void>();
  // const alertDialogCloseHandlerState = useRef<AlertDialogCloseHandler>();
  // const formDialogSubmitHandlerState = useRef<FormDialogSubmitHandler>();

  // const reopenLastFormDialog = () => {
  //   setShowFormDialog(true);
  // };

  // const closeFormDialog = () => {

  // };

  const { context, ...applicationContextData } =
    useApplicationContextDataObject(props);

  // const closeAlertDialog = (alertResponse: string) => {
  //   setShowAlertDialog(false);

  //   if (typeof alertDialogCloseHandlerState.current === "function") {
  //     alertDialogCloseHandlerState.current(alertResponse);
  //   }
  // };

  return (
    <ApplicationContextProvider value={context}>
      <ApplicationPrivateContextProvider value={applicationContextData}>
        <ApplicationContextWrapper>{props.children}</ApplicationContextWrapper>
        <AlertDialog />
        <FormDialog />
        <LoadingDialog />
      </ApplicationPrivateContextProvider>
    </ApplicationContextProvider>
  );
};
