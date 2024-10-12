import { Fragment } from "react";
import { Toaster } from "sonner";
import { cn } from "~/lib/utils";

// import { useApp } from '@components/ApplicationContext/hooks';

type ApplicationContextWrapperComponent =
  React.FunctionComponent<React.PropsWithChildren>;

export const ApplicationContextWrapper: ApplicationContextWrapperComponent = (
  props
) => {
  // const context = useApp()

  const toasterBaseClassName =
    "shadow-md border-solid border-[1px] py-3 px-4 w-full flex flex-row gap-2 items-center rounded-md select-node [&_*]:select-none";

  return (
    <Fragment>
      {props.children}
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            // toast:
            //   "bg-zinc-50 dark:bg-zinc-800 shadow-md border-solid border-[1px] border-zinc-200 dark:border-zinc-700 py-3 px-4 w-full flex flex-row gap-2 items-center rounded-md",
            // title: "text-zinc-900 dark:text-zinc-100 font-bold",
            // description: "text-zinc-900 dark:text-zinc-100 ",
            actionButton: "bg-zinc-400",
            cancelButton: "bg-orange-400",
            closeButton: "bg-lime-400",
            default: cn(
              toasterBaseClassName,
              "bg-zinc-200 border-zinc-600 text-zinc-950"
            ),
            error: cn(
              toasterBaseClassName,
              "!bg-red-200 !border-red-600 !text-red-950"
            ),
            info: cn(
              toasterBaseClassName,
              "!bg-blue-200 !border-blue-600 !text-blue-950"
            ),
            success: cn(
              toasterBaseClassName,
              "!bg-green-200 !border-green-600 !text-green-950"
            ),
            warning: cn(
              toasterBaseClassName,
              "!bg-yellow-200 !border-yellow-600 !text-yellow-950"
            ),
          },
        }}
      />
    </Fragment>
  );
};
