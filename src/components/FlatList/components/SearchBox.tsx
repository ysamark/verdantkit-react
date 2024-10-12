import { FaSistrix } from "react-icons/fa6";

import { useFlatList } from "@components/FlatList/hooks";
import { noEmpty } from "@verdantkit/utils";

export const SearchBox = () => {
  const context = useFlatList();

  const showSearchBox =
    typeof context.props.showSearchBox === "boolean"
      ? context.props.showSearchBox
      : true;

  if (!showSearchBox) {
    return null;
  }

  const searchInputChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;
    const inputElementValue = inputElement.value.replace(/\s+/g, " ");

    const queryValue = noEmpty(inputElementValue)
      ? inputElementValue
      : undefined;

    context.setQuery(queryValue);
  };

  return (
    <label className="w-full max-w-md rounded-full flex flex-row items-center cursor-text py-3 px-6 bg-zing-50 border-zinc-400 border-solid border-[1px] dark:bg-zinc-900 dark:border-zinc-800 mb-7">
      <div className="w-full flex flex-row items-center">
        <i className="inline-flex mr-3 text-zinc-400 dark:text-zinc-100">
          <FaSistrix />
        </i>
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={context.query ?? ""}
          onChange={searchInputChangeHandler}
          className="w-full border-0 outline-0 bg-transparent dark:text-zinc-100"
        />
      </div>
    </label>
  );
};
