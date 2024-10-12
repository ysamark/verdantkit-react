import deepmerge from "deepmerge";
import { useRef, useState } from "react";

import {
  AlertDialogCloseHandler,
  ApplicationContextConfig,
  ApplicationContextDataObject,
  FormDialogCloseHandler,
  FormDialogSubmitHandler,
  LoadingDialogState,
  UseApplicationContextDataObjectHook,
} from "@components/ApplicationContext/types";
import { appOriginValueFallback } from "@components/ApplicationContext/utils";
import { DialogBoxSize } from "@components/Dialog/utils";
import { AlertDialogProps } from "~/components/ApplicationContext/components/AlertDialog/components";

import { alertFactory } from "./utils";
import { openFormDialogFactory } from "./utils/openFormDialog";
import { resolvePromiseFactory } from "./utils/resolvePromise";

const DEFAULT_LOADING_DIALOG_STATE: LoadingDialogState = {
  show: false,
  state: "loading",
  label: "A carregar...",
};

export const useApplicationContextDataObject: UseApplicationContextDataObjectHook =
  (props) => {
    const [showFormDialog, setShowFormDialog] = useState<boolean>(false);
    const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
    const [loadingDialogState, setLoadingDialogState] =
      useState<LoadingDialogState>(DEFAULT_LOADING_DIALOG_STATE);
    const [FormDialogContent, setFormDialogContent] =
      useState<React.ElementType>();
    const [config, setConfig] = useState<ApplicationContextConfig>({});

    const alertDialogPropsState = useRef<AlertDialogProps>();
    const formDialogBoxSizeState = useRef<DialogBoxSize>("default");
    const formDialogCloseHandlerState = useRef<FormDialogCloseHandler>();
    const alertDialogCloseHandlerState = useRef<AlertDialogCloseHandler>();
    const formDialogSubmitHandlerState = useRef<FormDialogSubmitHandler>();

    const context: ApplicationContextDataObject = {
      config,
      origin: props.headers["x-app-origin"] || appOriginValueFallback(),

      alert(...args) {
        const alert = alertFactory({
          alertDialogCloseHandlerState,
          alertDialogPropsState,
          setShowAlertDialog,
        });

        return alert(...args);
      },

      openFormDialog: (...args) => {
        const openFormDialog = openFormDialogFactory({
          formDialogBoxSizeState,
          formDialogCloseHandlerState,
          formDialogSubmitHandlerState,
          setFormDialogContent,
          setShowFormDialog,
        });

        return openFormDialog(...args);
      },

      openSmallFormDialog: (...args) => {
        formDialogBoxSizeState.current = "small";

        return context.openFormDialog(...args);
      },

      openXSmallFormDialog: (...args) => {
        formDialogBoxSizeState.current = "x-small";

        return context.openFormDialog(...args);
      },

      openMediumFormDialog: (...args) => {
        formDialogBoxSizeState.current = "medium";

        return context.openFormDialog(...args);
      },

      openLargeFormDialog: (...args) => {
        formDialogBoxSizeState.current = "large";

        return context.openFormDialog(...args);
      },

      openXLargeFormDialog: (...args) => {
        formDialogBoxSizeState.current = "x-large";

        return context.openFormDialog(...args);
      },

      openXXLargeFormDialog: (...args) => {
        formDialogBoxSizeState.current = "xx-large";

        return context.openFormDialog(...args);
      },

      setConfig: (value) => {
        const updatedConfig = deepmerge(config, value);

        setConfig(updatedConfig as ApplicationContextConfig);
      },

      resolvePromise(handler) {
        const resolvePromise = resolvePromiseFactory({
          DEFAULT_LOADING_DIALOG_STATE,
          setLoadingDialogState,
        });

        return resolvePromise(handler);
      },
    };

    return {
      context,
      FormDialogContent,
      loadingDialogState,
      showAlertDialog,
      showFormDialog,
      setFormDialogContent,
      setLoadingDialogState,
      setShowAlertDialog,
      setShowFormDialog,

      alertDialogPropsState,
      formDialogBoxSizeState,
      formDialogCloseHandlerState,
      alertDialogCloseHandlerState,
      formDialogSubmitHandlerState,
    };
  };
