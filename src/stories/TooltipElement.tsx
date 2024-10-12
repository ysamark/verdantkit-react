import { Tooltip } from "@components/Tooltip";

export const TooltipElement = () => {
  return (
    <Tooltip text="Enviar email para todo mundo">
      <button type="button" onClick={() => alert("Email enviado")}>
        Enviar
      </button>
    </Tooltip>
  );
};
