import { useSelectField } from "@components/Form/SelectField/hooks";

export const FilterInput = () => {
  const { setQuery, query, closeOnSelectFieldContainerBlurState, resetState } =
    useSelectField();

  const filterInputBlurHandler = () => {
    if (closeOnSelectFieldContainerBlurState.current) {
      resetState();
    }
  };

  const filterInputChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;

    setQuery(inputElement.value);
  };

  return (
    <input
      value={query}
      onBlur={filterInputBlurHandler}
      onChange={filterInputChangeHandler}
      ref={(inputElement) => inputElement?.focus()}
      className="dark:text-zinc-50 w-full py-1 border-0 outline-none bg-transparent cursor-text"
    />
  );
};
