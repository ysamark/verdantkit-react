import React from "react";

import { usePrivateApp } from "@components/ApplicationContext/hooks/usePrivateApp";
import { Dialog } from "@components/Dialog";

import { LoadingDialogIcon } from "./loading";

export const LoadingDialog: React.FunctionComponent = () => {
  const context = usePrivateApp();

  return (
    <Dialog
      show={context.loadingDialogState.show}
      showButton={false}
      size="small"
    >
      <div className="w-full flex flex-row gap-3 items-center justify-center">
        <LoadingDialogIcon name={context.loadingDialogState.state} />
        <span className="text-2xl font-extralight text-zinc-800 dark:text-zinc-50">
          {context.loadingDialogState.label}
        </span>
      </div>
    </Dialog>
  );
};
