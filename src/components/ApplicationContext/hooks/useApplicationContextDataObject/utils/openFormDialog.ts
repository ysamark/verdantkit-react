import { formDataToJson, Optional } from "@verdantkit/utils";

import {
  FormDialogCloseHandler,
  FormDialogOpenHandler,
  FormDialogSubmitHandler,
} from "@components/ApplicationContext/types";
import { DialogBoxSize } from "@components/Dialog/utils";
import { StateSetter } from "~/types";

type OpenFormDialogFactoryContext = {
  setShowFormDialog: StateSetter<boolean>;
  setFormDialogContent: StateSetter<Optional<React.ElementType>>;
  formDialogCloseHandlerState: React.MutableRefObject<
    Optional<FormDialogCloseHandler>
  >;
  formDialogSubmitHandlerState: React.MutableRefObject<
    Optional<FormDialogSubmitHandler>
  >;
  formDialogBoxSizeState: React.MutableRefObject<Optional<DialogBoxSize>>;
};

type OpenFormDialogFactory = (
  context: OpenFormDialogFactoryContext
) => FormDialogOpenHandler;

const FORM_DIALOG_BOX_DEFAULT_SIZE: DialogBoxSize = "large";

export const openFormDialogFactory: OpenFormDialogFactory =
  (context) => (formDataObjectSchema, formElement) => {
    // const formDataObjectSchema =
    //   args[0] instanceof z.ZodObject ? args[0] : null
    // const formElement = args[-1 + args.length]

    const reopenLastFormDialog = () => {
      context.setShowFormDialog(true);
    };

    const closeFormDialog = () => {
      context.setShowFormDialog(false);

      context.formDialogBoxSizeState.current = FORM_DIALOG_BOX_DEFAULT_SIZE;
    };

    if (typeof formElement !== "function") {
      throw new Error("form element must be a valid react component");
    }

    context.setShowFormDialog(true);

    context.setFormDialogContent(() => formElement);

    return new Promise((resolve) => {
      const defaultResponseData = {
        reopen: reopenLastFormDialog,
        close: closeFormDialog,
      };

      context.formDialogCloseHandlerState.current = () => {
        resolve({
          ...defaultResponseData,
          error: true,
          success: false,
          data: null,
        });
      };

      context.formDialogSubmitHandlerState.current = async (event) => {
        const formElement = event.target as HTMLFormElement;
        const formData = new FormData(formElement);
        const jsonFormData = formDataToJson(formData);

        const validatedFormData = await formDataObjectSchema.safeParseAsync(
          jsonFormData
        );

        if (validatedFormData.success) {
          closeFormDialog();

          resolve({
            ...defaultResponseData,
            error: false,
            success: true,
            data: validatedFormData.data,
          });
        }
      };
    });
  };
