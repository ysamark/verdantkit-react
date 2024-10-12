import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

import { useDropZone } from "@components/DropZone/hooks";
import { FilePreviewProps } from "@components/DropZone/types";
import { cn } from "@lib/utils";
import { generateRandomId } from "@verdantkit/utils";

export const DropZoneFilePreview = (props: FilePreviewProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const context = useDropZone();

  const fileUrl = (file: File) => URL.createObjectURL(file);

  const filePreviewDeleteButtonClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    context.setFiles(
      context.files.filter((file, fileIndex) => file && fileIndex !== props.id)
    );
  };

  const containerElementClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const containerElement = event.target;

    if (containerElement instanceof HTMLElement) {
      containerElement.tabIndex = Number(generateRandomId());
      containerElement.focus();
    }

    setExpand(!expand);
  };

  const containerElementBlurHandler = () => {
    setExpand(false);
  };

  return (
    <div
      onClick={containerElementClickHandler}
      onBlur={containerElementBlurHandler}
      className={cn(
        "w-full flex flex-grow bg-zinc-200 dark:bg-zinc-800 cursor-pointer transition-all rounded-md relative",
        props.className,
        expand ? null : "hover:opacity-70 active:opacity-60"
      )}
    >
      <img
        src={fileUrl(props.file)}
        alt={`Uploaded file #${props.id} - ${props.file.name}`}
        className="w-full rounded-md border-0 outline-0 appearance-none select-none pointer-events-none object-cover"
        style={{ height: `${props.height}px` }}
      />
      <div className="absolute right-3 top-3">
        <button
          className="text-xs size-9 rounded-full bg-zinc-300 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50 shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95 flex flex-row justify-center items-center"
          type="button"
          role="button"
          onClick={filePreviewDeleteButtonClickHandler}
        >
          <FaTrash />
        </button>
      </div>
      {expand && (
        <div className="w-full absolute top-1/2 left-0 z-[90] -translate-y-1/2 outline-0 rounded-md shadow-xl">
          <img
            src={fileUrl(props.file)}
            alt={`Uploaded file #${props.id} - ${props.file.name}`}
            className="w-full rounded-md border-0 outline-0 appearance-none select-none pointer-events-none object-cover"
          />
        </div>
      )}
    </div>
  );
};
