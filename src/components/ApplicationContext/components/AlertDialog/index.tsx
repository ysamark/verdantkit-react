import { Dialog } from "@components/Dialog";

import { usePrivateApp } from "@components/ApplicationContext/hooks/usePrivateApp";

import { AlertBody } from "./components/AlertBody";

export const AlertDialog: React.FunctionComponent = () => {
  const privateContext = usePrivateApp();

  const alertDialogCloseHandler = () => {
    privateContext.setShowAlertDialog(false);
  };

  const alertDialogProps = privateContext.alertDialogPropsState.current;

  return (
    <Dialog
      showButton={false}
      show={privateContext.showAlertDialog}
      size="medium"
      onClose={alertDialogCloseHandler}
    >
      {alertDialogProps && <AlertBody {...alertDialogProps} />}
    </Dialog>
  );
};
