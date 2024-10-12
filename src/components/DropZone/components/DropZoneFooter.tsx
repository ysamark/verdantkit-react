import { useDropZone } from "@components/DropZone/hooks";
import { FaEye, FaTrash } from "react-icons/fa6";

export const DropZoneFooter = () => {
  const context = useDropZone();

  if (!context.hasValidFileObject()) {
    return null;
  }

  const deleteButtonClickHandler = () => {
    context.defaultValueState.current = [];

    context.setFile(null);

    const dropZoneDeleteHandler = context.props.onDelete;

    if (typeof dropZoneDeleteHandler === "function") {
      dropZoneDeleteHandler();
    }
  };

  return (
    <div className="w-full pt-1 block absolute bottom-5 left-0 right-0">
      <ul className="w-full flex flex-row gap-2 justify-center">
        <li className="inline-flex p-0.5">
          <div className="w-full p-0.5">
            <button
              type="button"
              onClick={deleteButtonClickHandler}
              title="Remover este arquivo"
              className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-500 dark:text-zinc-200 border-0 outline-0 size-12 rounded-full transition-transform active:scale-95 flex flex-col items-center justify-center shadow-lg"
            >
              <FaTrash />
            </button>
          </div>
        </li>
        <li className="inline-flex p-0.5">
          <div className="w-full p-0.5">
            <button
              type="button"
              title="Pre-visualizar este arquivo"
              className="bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-500 dark:text-zinc-200 border-0 outline-0 size-12 rounded-full transition-transform active:scale-95 flex flex-col items-center justify-center shadow-lg"
            >
              <FaEye />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
