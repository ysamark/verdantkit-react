import { noEmpty } from "@verdantkit/utils";
import React, { Fragment } from "react";

type FormGroupProps = {
  title?: string;
  subtitle?: string;
  footer?: string;
};

type FormGroupComponent = React.FunctionComponent<
  React.PropsWithChildren & FormGroupProps
>;

export const FormGroup: FormGroupComponent = ({ title, ...props }) => {
  const titled = noEmpty(title);

  return (
    <div className="bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600 w-full rounded-sm block px-3 py-5 border-[1px] border-solid mb-4">
      {titled && (
        <div className="w-full block pb-[22px]">
          <h5 className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">
            {title}
          </h5>
          {noEmpty(props.subtitle) && (
            <h6 className="text-zinc-600 dark:text-zinc-300 text-xs font-light block pt-2">
              {props.subtitle}
            </h6>
          )}
        </div>
      )}
      <Fragment>{props.children}</Fragment>
      {noEmpty(props.footer) && (
        <footer className="w-full flex justify-end">
          <span className="text-xs font-semibold text-blue-300 block text-right">
            {props.footer}
          </span>
        </footer>
      )}
    </div>
  );
};
