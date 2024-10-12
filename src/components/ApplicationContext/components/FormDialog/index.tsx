import { Dialog } from "@components/Dialog";

import { usePrivateApp } from "@components/ApplicationContext/hooks/usePrivateApp";

import { FormWrapper } from "./components/FormWrapper";

export const FormDialog = () => {
  const privateContext = usePrivateApp();

  const formDialogCloseHandler = () => {
    privateContext.setShowFormDialog(false);

    if (
      typeof privateContext.formDialogCloseHandlerState.current === "function"
    ) {
      // TODO: check what information must be send bellow
      privateContext.formDialogCloseHandlerState.current("");
    }
  };

  // const alertDialogCloseHandler = () => {
  //   setShowAlertDialog(false);
  // };

  const formDialogSubmitHandler = (event: SubmitEvent) => {
    if (
      typeof privateContext.formDialogSubmitHandlerState.current === "function"
    ) {
      privateContext.formDialogSubmitHandlerState.current(event);
    }
  };

  return (
    <Dialog
      show={privateContext.showFormDialog}
      onClose={formDialogCloseHandler}
      size={privateContext.formDialogBoxSizeState.current}
    >
      <FormWrapper onSubmit={formDialogSubmitHandler}>
        {privateContext.FormDialogContent && (
          <privateContext.FormDialogContent />
        )}
      </FormWrapper>
    </Dialog>
  );
};
