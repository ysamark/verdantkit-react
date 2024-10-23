import { noEmpty, range } from "@verdantkit/utils";
import { useState } from "react";
import { FaTable } from "react-icons/fa6";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { NavigationButton } from "@components/Navigation";
import { cn } from "@lib/utils";

type HomeScreenProps = {
  title?: string;
  map?: [number, number?];
};

type HomeScreenComponent = React.FunctionComponent<HomeScreenProps>;

export const HomeScreen: HomeScreenComponent = (props) => {
  const [insertingTableSizes, setInsertingTableSizes] = useState<string>("");
  const [selectedMapButtons, setSelectedMapButtons] = useState<Array<string>>(
    []
  );

  const { editor } = useStandardRichTextFieldContext();

  if (!editor) {
    return null;
  }

  const insertTable = (rows: number, cols: number) => {
    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({
          rows,
          cols,
          withHeaderRow: true,
        })
        .run();
    }
  };

  const activeButton = (row: number, col: number) => {
    const selectedMapButtons: Array<string> = [];

    setInsertingTableSizes(`${row}x${col}`);

    for (; row > 0; row--) {
      let colIndex = col;

      for (; colIndex > 0; colIndex--) {
        selectedMapButtons.push(`${row}:${colIndex}`);
      }
    }

    setSelectedMapButtons(selectedMapButtons);
  };

  const tableRowsButtonsMapBodyMouseLeaveHandler = () => {
    setSelectedMapButtons([]);
    setInsertingTableSizes("");
  };

  const buttonsMap =
    props.map instanceof Array ? props.map.concat(props.map[0]) : [10, 8];

  const buttonsMapRows = parseInt(String(buttonsMap[1]));
  const buttonsMapCols = parseInt(String(buttonsMap[0]));

  const rows = !isNaN(buttonsMapRows) ? buttonsMapRows : 8;
  const cols = !isNaN(buttonsMapCols) ? buttonsMapCols : 10;

  return (
    <div className="w-full h-auto block">
      <strong className="block text-sm font-bold mb-3 text-zinc-800 dark:text-zinc-200">
        {((noEmpty(props.title) && props.title) || "Criar Tabela").concat(
          noEmpty(insertingTableSizes) ? ` ${insertingTableSizes}` : ""
        )}
      </strong>
      <div
        className="w-full h-auto flex flex-col gap-1"
        onMouseLeave={tableRowsButtonsMapBodyMouseLeaveHandler}
      >
        {range(1, rows).map((row) => (
          <div
            className="w-full h-auto flex flex-row gap-1 justify-center items-center"
            key={row}
          >
            {range(1, cols).map((col) => (
              <div
                className="size-5 block bg-transparent cursor-pointer rounded-sm"
                key={col}
              >
                <button
                  type="button"
                  role="button"
                  className={cn(
                    "size-5 block border-zinc-500 dark:border-zinc-600 border-solid border-[1px] bg-transparent cursor-pointer hover:bg-primary-200 hover:border-primary-200 [&.x-selected]:bg-primary-200 [&.x-selected]:border-primary-200 rounded-sm",
                    selectedMapButtons.includes(`${row}:${col}`)
                      ? "x-selected"
                      : undefined
                  )}
                  onClick={() => insertTable(row, col)}
                  onMouseOver={() => activeButton(row, col)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full pt-2 mt-2 border-t border-solid border-zinc-200 dark:border-zinc-700">
        <NavigationButton
          to="create-table"
          className="w-full border-0 bg-transparent px-2 py-2 rounded-md text-xs text-left flex flex-row gap-2 items-center hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <i className="inline-flex">
            <FaTable />
          </i>
          <span className="text-sm dark:text-zinc-200 inline-flex -mt-0.5">
            Inserir tabela
          </span>
        </NavigationButton>
      </div>
    </div>
  );
};
