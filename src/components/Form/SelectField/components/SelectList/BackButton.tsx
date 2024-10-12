import { Fragment } from "react";
import { FaAngleLeft } from "react-icons/fa6";

import { useSelectField } from "@components/Form/SelectField/hooks";

export const BackButton = () => {
  const context = useSelectField();

  const listBackButtonClickHandler = () => {
    context.setListDataStack(context.listDataStack.slice(0, -1));
  };

  return (
    <Fragment>
      {context.listDataStack.length >= 2 && (
        <div className="w-full h-auto flex flex-row items-center py-2 px-3">
          <button
            onClick={listBackButtonClickHandler}
            type="button"
            className="bg-transparent border-0 outline-none pt-[7px] pb-[9px] px-4 rounded-md flex items-center flex-row gap-2 hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 dark:text-zinc-100"
          >
            <i className="inline-flex items-center">
              <FaAngleLeft />
            </i>
            <div className="w-full">
              <span>Voltar</span>
            </div>
          </button>
        </div>
      )}
    </Fragment>
  );
};
