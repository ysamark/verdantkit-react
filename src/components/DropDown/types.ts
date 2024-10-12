import { StateSetter } from "~/types";

export type DropDownProps = React.PropsWithChildren;

export type DropDownContextDataObject = {
  props: DropDownProps;
  show: boolean;
  setShow: StateSetter<boolean>;
  buttonElementRef: React.RefObject<HTMLButtonElement>;
  toggle: () => void;
};

export type DropDownPosition = "top" | "bottom";
