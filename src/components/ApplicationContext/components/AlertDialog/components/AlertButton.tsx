import { usePrivateApp } from "@components/ApplicationContext/hooks/usePrivateApp";
import { cn } from "~/lib/utils";

import { AlertButtons } from ".";

type AlertButtonProps = {
  buttonKey: string;
};

type AlertButtonComponent = React.FunctionComponent<AlertButtonProps>;

function getButtonProps<ButtonKey extends keyof AlertButtons>(
  key: ButtonKey
): AlertButtons[ButtonKey] {
  const buttonKey = key.toLowerCase().replace(/^(Buttons\.)/i, "");

  return AlertButtons[buttonKey as ButtonKey];
}

export const AlertButton: AlertButtonComponent = ({ buttonKey }) => {
  const privateContext = usePrivateApp();

  const { label, style } = getButtonProps(buttonKey as keyof AlertButtons);

  const closeAlertDialog = (alertResponse: string) => {
    const alertDialogCloseHandler =
      privateContext.alertDialogCloseHandlerState.current;

    if (typeof alertDialogCloseHandler === "function") {
      alertDialogCloseHandler(alertResponse);
    }

    privateContext.setShowAlertDialog(false);
  };

  const buttonClickHandler = () => {
    const alertResponse = buttonKey.replace(/^(Buttons\.)/i, "AlertResponse.");

    closeAlertDialog(alertResponse);
  };

  return (
    <button
      className={cn(
        style,
        "select-none outline-none border-0 text-sm rounded-lg py-2 px-3"
      )}
      onClick={buttonClickHandler}
      type="button"
      role="button"
    >
      {label}
    </button>
  );
};
