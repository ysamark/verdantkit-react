import { Nullable, Optional } from "@verdantkit/utils";
import { z } from "zod";

import { DialogBoxSize } from "@components/Dialog/utils";
import { StateSetter } from "~/types";

import {
  AlertButton,
  AlertDialogProps,
} from "./components/AlertDialog/components";
import { LoadingStateIcon } from "./components/LoadingDialog/loading";

export type FontAwesome6IconName = keyof typeof import("react-icons/fa6");

export type OpenFormDialogUtilArgsWithDataSchema<
  FormDataObjectType extends z.ZodRawShape
> = [z.ZodObject<FormDataObjectType, "strip", z.ZodTypeAny>, React.ElementType];

export type OpenFormDialogUtilArgsWithoutDataSchema = [React.ElementType];

export type Handler = () => Promise<any>;

export type OpenFormDialogUtilDefaultResponse = {
  reopen: () => void;
  close: () => void;
};

export type OpenFormDialogUtilFailureResponse =
  OpenFormDialogUtilDefaultResponse & {
    error: true;
    success: false;
    data: null;
  };

export type OpenFormDialogUtilSuccessResponse<Data> =
  OpenFormDialogUtilDefaultResponse & {
    error: false;
    success: true;
    data: Data;
  };

export type AlertUtilButtonsList = Array<`Buttons.${AlertButton}`>;

export type AlertResponse = `AlertResponse.${AlertButton}`;

export type AlertUtilOptions = {
  buttons?: AlertUtilButtonsList;
  icon?: FontAwesome6IconName;
};

export type AlertUtilsArgsWithoutTitle = [string, AlertUtilOptions?];

export type AlertUtilsArgsWithTitle = [string, string, AlertUtilOptions?];

export type AlertUtilsArgs =
  | AlertUtilsArgsWithTitle
  | AlertUtilsArgsWithoutTitle;

export type ApplicationContextConfig = {
  [key: string]: any;
};

export type FormDialogOpenHandler = <FormDataObjectType extends z.ZodRawShape>(
  ...[
    formDataSchema,
    formElement,
  ]: OpenFormDialogUtilArgsWithDataSchema<FormDataObjectType>
) => Promise<
  | OpenFormDialogUtilFailureResponse
  | OpenFormDialogUtilSuccessResponse<z.infer<typeof formDataSchema>>
>;

export type ApplicationContextProps = React.PropsWithChildren<{
  headers: Record<string, string>;
  config?: Record<string, string>;
}>;

export type ApplicationContextAlertUtil = (
  ...args: AlertUtilsArgs
) => Promise<AlertResponse>;

export type ApplicationContextResolvePromiseUtil = <
  HandlerType extends Handler
>(
  handler: HandlerType
) => Promise<Nullable<ReturnType<HandlerType>>>;

export type ApplicationContextDataObject = {
  origin: string;
  config: ApplicationContextConfig;

  setConfig: (config: ApplicationContextConfig) => void;

  openFormDialog: FormDialogOpenHandler;
  openLargeFormDialog: FormDialogOpenHandler;
  openSmallFormDialog: FormDialogOpenHandler;
  openXSmallFormDialog: FormDialogOpenHandler;
  openMediumFormDialog: FormDialogOpenHandler;
  openXLargeFormDialog: FormDialogOpenHandler;
  openXXLargeFormDialog: FormDialogOpenHandler;
  alert: ApplicationContextAlertUtil;
  resolvePromise: ApplicationContextResolvePromiseUtil;
};

export type LoadingDialogState = {
  show: boolean;
  state: LoadingStateIcon;
  label: string;
};

export type ApplicationPrivateContextDataObject = {
  showFormDialog: boolean;
  setShowFormDialog: StateSetter<boolean>;
  showAlertDialog: boolean;
  setShowAlertDialog: StateSetter<boolean>;
  loadingDialogState: LoadingDialogState;
  setLoadingDialogState: StateSetter<LoadingDialogState>;
  FormDialogContent: Optional<React.ElementType>;
  setFormDialogContent: StateSetter<Optional<React.ElementType>>;
  alertDialogPropsState: React.MutableRefObject<Optional<AlertDialogProps>>;
  formDialogBoxSizeState: React.MutableRefObject<DialogBoxSize>;
  formDialogCloseHandlerState: React.MutableRefObject<
    Optional<FormDialogCloseHandler>
  >;
  alertDialogCloseHandlerState: React.MutableRefObject<
    Optional<AlertDialogCloseHandler>
  >;
  formDialogSubmitHandlerState: React.MutableRefObject<
    Optional<FormDialogSubmitHandler>
  >;
};

export type UseApplicationContextDataObjectHook = (
  props: ApplicationContextProps
) => ApplicationPrivateContextDataObject & {
  context: ApplicationContextDataObject;
};

export type FormDialogSubmitHandler = (event: SubmitEvent) => void;

export type AlertDialogCloseHandler = (alertResponse: string) => void;

export type FormDialogCloseHandler = (alertResponse: string) => void;
