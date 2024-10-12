import { AlertDialogProps } from "@components/ApplicationContext/components/AlertDialog/components";
import {
  AlertDialogCloseHandler,
  AlertResponse,
  ApplicationContextAlertUtil,
} from "@components/ApplicationContext/types";
import { noEmpty, Optional } from "@verdantkit/utils";
import { StateSetter } from "~/types";

type AlertFactory = (context: {
  setShowAlertDialog: StateSetter<boolean>;
  alertDialogPropsState: React.MutableRefObject<Optional<AlertDialogProps>>;
  alertDialogCloseHandlerState: React.MutableRefObject<
    Optional<AlertDialogCloseHandler>
  >;
}) => ApplicationContextAlertUtil;

export const alertFactory: AlertFactory =
  (context) =>
  (...args) => {
    const alertArguments = args.length >= 2 ? args : [null, ...args];

    const [alertTitle, alertMessage, alertOptions] = alertArguments;

    const options =
      alertOptions && typeof alertOptions === "object" ? alertOptions : {};

    context.alertDialogPropsState.current = {
      options,
      title: noEmpty(alertTitle) ? alertTitle : null,
      message: String(alertMessage),
    };

    context.setShowAlertDialog(true);

    return new Promise((resolve) => {
      context.alertDialogCloseHandlerState.current = (response) => {
        resolve(response as AlertResponse);
      };
    });
  };
