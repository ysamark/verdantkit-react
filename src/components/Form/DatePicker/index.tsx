import { Nullable } from "@verdantkit/utils";
import type { Datepicker, DatepickerOptions } from "flowbite";
import { useRef, useState } from "react";

type DatePickerProps = React.PropsWithRef<
  React.InputHTMLAttributes<HTMLInputElement> & DatepickerOptions
>;

export const DatePicker = (props: DatePickerProps) => {
  const inputElementRef = useRef<HTMLInputElement>(null);
  const datePickerObjectRef = useRef<Nullable<Datepicker>>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const inputClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputElement = event.target;

    if (!(inputElement instanceof HTMLInputElement)) {
      return;
    }

    import("flowbite").then(({ Datepicker }) => {
      datePickerObjectRef.current =
        datePickerObjectRef.current ||
        new Datepicker(inputElement, props as DatepickerOptions);

      const datePicker = datePickerObjectRef.current;

      if (!showDatePicker) {
        datePicker.show();
      } else {
        datePicker.hide();
      }

      setShowDatePicker(!showDatePicker);
    });
  };

  const inputBlurHandler = () => {
    setShowDatePicker(false);
  };

  const inputBlockedEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="relative block">
      <div className="absolute top-3 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <input
        {...props}
        ref={inputElementRef}
        readOnly
        type="text"
        className="bg-zinc-50 border-[1px] outline-0 border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white cursor-pointer select-none"
        onClick={inputClickHandler}
        onKeyDown={inputBlockedEventHandler}
        onKeyUp={inputBlockedEventHandler}
        onBlur={inputBlurHandler}
      />
    </div>
  );
};
