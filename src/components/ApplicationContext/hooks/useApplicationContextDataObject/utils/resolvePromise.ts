import {
  ApplicationContextResolvePromiseUtil,
  LoadingDialogState,
} from "~/components/ApplicationContext/types";
import { StateSetter } from "~/types";

type ResolvePromiseFactoryContext = {
  setLoadingDialogState: StateSetter<LoadingDialogState>;
  DEFAULT_LOADING_DIALOG_STATE: LoadingDialogState;
};

type ResolvePromiseFactory = (
  context: ResolvePromiseFactoryContext
) => ApplicationContextResolvePromiseUtil;

const LOADING_DIALOG_TIMEOUT_ON_RESOLVE = 2000; // 2s

export const resolvePromiseFactory: ResolvePromiseFactory =
  (context) => (handler) => {
    const updateLoadingState = (loadingState: Partial<LoadingDialogState>) => {
      context.setLoadingDialogState((loadingDialogState) => ({
        ...loadingDialogState,
        ...loadingState,
      }));
    };

    updateLoadingState({
      show: true,
    });

    return new Promise((resolve) => {
      const promiseHandler = async () => {
        try {
          const data = await handler();

          updateLoadingState({
            state: "complete",
            label: "Êxito!",
          });

          setTimeout(() => {
            updateLoadingState(context.DEFAULT_LOADING_DIALOG_STATE);

            resolve(data);
          }, LOADING_DIALOG_TIMEOUT_ON_RESOLVE);
        } catch (err) {
          updateLoadingState({
            state: "error",
            label: "Algo correu mal",
          });

          setTimeout(() => {
            updateLoadingState(context.DEFAULT_LOADING_DIALOG_STATE);

            resolve(null);
          }, LOADING_DIALOG_TIMEOUT_ON_RESOLVE);

          return err;
        }
      };

      promiseHandler();
    });
  };
