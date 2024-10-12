import { generateRandomId } from "@verdantkit/utils";

type CheckButtonProps = {
  type?: "checkbox" | "radio";
};

type CheckButtonComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.InputHTMLAttributes<HTMLInputElement> &
    CheckButtonProps
>;

export const CheckButton: CheckButtonComponent = ({ children, ...props }) => {
  const inputId = generateRandomId();

  return (
    <div className="w-full block">
      <label
        className="cursor-pointer bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 border-zinc-300 dark:border-zinc-950 rounded-lg border-[1px] border-solid flex flex-row items-center w-full py-2 px-3 [&_*]:select-none"
        htmlFor={inputId}
      >
        <input
          id={inputId}
          {...props}
          className="hidden [&_~_div.check-icon-wrapper_div]:checked:bg-blue-500 [&_~_div.check-icon-wrapper_div]:checked:w-6 [&_~_div.check-icon-wrapper_div]:checked:rounded-xl"
          type="checkbox"
        />
        <div className="check-icon-wrapper inline-flex mr-3">
          <div className="size-[18px] bg-white border-[1px] rounded-full transition-all" />
        </div>
        <div className="w-full inline-flex flex-row items-center">
          {children}
        </div>
      </label>
    </div>
  );
};
