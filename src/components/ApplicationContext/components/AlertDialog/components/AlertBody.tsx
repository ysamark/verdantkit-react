import { noEmpty } from "@verdantkit/utils";

import { AlertUtilButtonsList } from "@components/ApplicationContext/types";

import { AlertDialogProps } from ".";
import { AlertButton } from "./AlertButton";

type AlertBodyComponent = React.FunctionComponent<AlertDialogProps>;

export const AlertBody: AlertBodyComponent = ({ options, ...props }) => {
  const alertButtonsList: AlertUtilButtonsList =
    options && options.buttons instanceof Array
      ? options.buttons
      : ["Buttons.Ok"];

  return (
    <div className="w-full flex flex-col gap-3">
      {noEmpty(props.title) && (
        <h5 className="text-base select-none pointer-events-none font-extrabold text-zinc-900 dark:text-zinc-50">
          {props.title}
        </h5>
      )}
      <span className="select-none pointer-events-none dark:text-zinc-200">
        {props.message}
      </span>
      <div className="w-full flex flex-row gap-2 justify-end items-center">
        {alertButtonsList.map((buttonKey, buttonKeyIndex) => (
          <AlertButton buttonKey={buttonKey} key={buttonKeyIndex} />
        ))}
      </div>
    </div>
  );
};
