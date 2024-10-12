import { FaSistrix } from "react-icons/fa6";

import { useSelectList } from "@components/SelectList/hooks";

export const SearchInput = () => {
  const context = useSelectList();

  const inputChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;

    context.setQuery(inputElement.value);
  };

  return (
    <div className="border-solid border-[1px] border-zinc-300 dark:border-zinc-600 w-full flex flex-row items-center rounded-md py-2 px-3 gap-2">
      <i className="inline-flex text-lg text-zinc-600 font-light">
        <FaSistrix />
      </i>
      <div className="w-full inline-flex flex-row items-center">
        <input
          value={context.query ?? ""}
          onChange={inputChangeHandler}
          className="text-zinc-800 dark:text-zinc-50 w-full text-sm font-light bg-transparent border-0 outline-0"
        />
      </div>
    </div>
  );
};
