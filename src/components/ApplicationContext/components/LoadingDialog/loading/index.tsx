import { FaExclamation } from "react-icons/fa";

import { Spinner } from "@components/Spinner";

// import CheckIcon from "./check.svg";

const CheckIcon = () => {
  return (
    <svg
      className="data-loading-dialog-checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="data-loading-dialog-checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="data-loading-dialog-checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};

export const loadingStateIcons = {
  loading: () => <Spinner />,
  complete: () => <CheckIcon />,
  error: () => <FaExclamation />,
};

export type LoadingStateIcons = typeof loadingStateIcons;

export type LoadingStateIcon = keyof LoadingStateIcons;

type LoadingDialogIconComponentProps = {
  name: LoadingStateIcon;
};

type LoadingDialogIconComponent =
  React.FunctionComponent<LoadingDialogIconComponentProps>;

export const LoadingDialogIcon: LoadingDialogIconComponent = ({ name }) => {
  const IconElement = loadingStateIcons[name];

  return <IconElement />;
};
