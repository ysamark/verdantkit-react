import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import { useDropDown } from "@components/DropDown";
import { CheckBox } from "@components/Form/CheckBox";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { NavigationBack } from "@components/Navigation";

type CreateTableFormData = {
  rows: number;
  cols: number;
  withHeaderRow: boolean;
};

export const CreateTableScreen = () => {
  const [formData, setFormData] = useState<CreateTableFormData>({
    rows: 0,
    cols: 1,
    withHeaderRow: true,
  });

  const dropdown = useDropDown();
  const { editor } = useStandardRichTextFieldContext();

  const inputsKeyDownHandler: React.KeyboardEventHandler = (event) => {
    const pressedKey = event.key;

    if (!/^[0-9]$/.test(pressedKey) && pressedKey.length < 2) {
      event.preventDefault();
    }
  };

  const inputsChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;
    const inputElementName = inputElement.name;

    if (inputElementName in formData) {
      setFormData({
        ...formData,
        [inputElementName]: parseInt(inputElement.value),
      });
    }
  };

  const buttonClickHandler = () => {
    if (!isFormDataValid()) {
      return;
    }

    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({
          ...formData,
          withHeaderRow: true,
        })
        .run();

      dropdown.close();
    }
  };

  const checkBoxChangeHandler: React.ChangeEventHandler = (event) => {
    const inputElement = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      withHeaderRow: inputElement.checked,
    });
  };

  const isFormDataValid = (): boolean => {
    const keys = ["cols", "rows"] as const;

    return !keys.find((key) => {
      const dataValue = formData[key as keyof CreateTableFormData];
      return typeof dataValue !== "number" || isNaN(dataValue) || dataValue < 1;
    });
  };

  return (
    <div className="w-64 p-4 relative flex flex-col gap-3">
      <div className="w-full flex flex-row gap-3">
        <NavigationBack className="size-7 rounded-full text-[9px] inline-flex justify-center items-center bg-zinc-200 dark:bg-zinc-700 enabled:hover:bg-zinc-300 enabled:dark:hover:bg-zinc-600 enabled:active:scale-95 transition-transform disabled:opacity-25">
          <FaArrowLeft />
        </NavigationBack>
        <strong>Inserir tabela</strong>
      </div>
      <div className="w-full flex flex-row gap-3 items-center">
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="data-table-cols-count"
            className="text-xs dark:text-zinc-500"
          >
            Colunas
          </label>
          <input
            className="w-full rounded-md bg-transparent border-zinc-200 dark:border-zinc-700 dark::border-zinc-700 outline-0 border-[1px] px-4 pb-[14px] pt-3 border-solid text-center leading-none dark:text-zinc-100"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            type="text"
            id="data-table-cols-count"
            name="cols"
            onKeyDown={inputsKeyDownHandler}
            onChange={inputsChangeHandler}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="data-table-rows-count"
            className="text-xs dark:text-zinc-500"
          >
            Linhas
          </label>
          <input
            className="w-full rounded-md bg-transparent border-zinc-200 dark:border-zinc-700 dark::border-zinc-700 outline-0 border-[1px] px-4 pb-[14px] pt-3 border-solid text-center leading-none dark:text-zinc-100"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            type="text"
            id="data-table-rows-count"
            name="rows"
            onKeyDown={inputsKeyDownHandler}
            onChange={inputsChangeHandler}
          />
        </div>
      </div>
      <div>
        <CheckBox
          onChange={checkBoxChangeHandler}
          defaultChecked={formData.withHeaderRow}
          size="small"
          label="Incluir cabeçalho da tabela"
        />
      </div>
      <div>
        <button
          type="button"
          disabled={!isFormDataValid()}
          onClick={buttonClickHandler}
          className="w-full rounded-md px-3 pt-3 pb-4 bg-primary-200 disabled:opacity-35 disabled:cursor-not-allowed enabled:hover:bg-primary-300 enabled:active:bg-primary-400 leading-none enabled:cursor-pointer text-white enabled:active:scale-95 transition-transform"
        >
          Inserir
        </button>
      </div>
    </div>
  );
};
