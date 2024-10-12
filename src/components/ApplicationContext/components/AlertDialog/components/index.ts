import { AlertUtilOptions } from "@components/ApplicationContext/types";

export const AlertButtons = {
  ok: {
    style: "bg-zinc-200 text-zinc-800",
    label: "Ok",
  },

  cancel: {
    style: "bg-zinc-200 text-zinc-800",
    label: "Cancelar",
  },

  yes: {
    style: "text-zinc-50 bg-blue-500 text-zinc-50",
    label: "Sim",
  },

  no: {
    style: "bg-zinc-200 text-zinc-800",
    label: "Não",
  },

  retry: {
    style: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50",
    label: "Tentar Novamente",
  },
};

export type AlertButtons = typeof AlertButtons;

export type AlertButton = Capitalize<keyof AlertButtons>;

export type AlertDialogProps = {
  message: string;
  title?: string | null;
  options?: AlertUtilOptions | null;
};
