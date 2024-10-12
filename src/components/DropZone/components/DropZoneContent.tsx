import { DropzoneState } from "react-dropzone";
import { FaPlus } from "react-icons/fa6";

import { useDropZone } from "@components/DropZone/hooks";
import { cn } from "@lib/utils";
import { DropZoneThumbnailFilePreviews } from "./DropZoneFilePreviews/Thumbnail";

type DropZoneContentProps = React.PropsWithChildren<DropzoneState>;

type DropZoneContentComponent = React.FunctionComponent<DropZoneContentProps>;

export const DropZoneContent: DropZoneContentComponent = ({
  getRootProps,
  getInputProps,
  isDragActive,
}) => {
  const { props, file, ...context } = useDropZone();

  const resolveHiddenInputDefaultValue = () => {
    return (file && URL.createObjectURL(file)) || undefined;
  };

  return (
    <div
      className={cn(
        "border-dashed border-[2px] w-full rounded-md cursor-pointer select-none [&_*]:select-none [&_*]:cursor-pointer [&_*]:text-inherit [&_*]:text-center",
        context.dropError
          ? "bg-red-200 hover:bg-red-300 active:bg-red-400 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800 border-red-500 dark:border-red-900"
          : "bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:active:bg-zinc-900 dark:border-zinc-600 dark:text-zinc-300"
      )}
    >
      <div
        style={{ minHeight: `${props.height || 220}px` }}
        {...getRootProps()}
        className="w-full h-auto flex flex-col items-center justify-center px-5 pt-[10px] pb-5 relative"
      >
        <DropZoneThumbnailFilePreviews />
        <input
          readOnly
          name={props.name}
          type="hidden"
          defaultValue={resolveHiddenInputDefaultValue()}
        />
        <input {...getInputProps()} />
        <i className="block text-3xl">
          <FaPlus />
        </i>
        <p className="block pt-1 m-0 text-xs font-normal">
          {context.dropError
            ? "Arquivo não suportado, envie uma imagem no formato JPG, PNG ou GIF"
            : !isDragActive
            ? "Arraste e solte uma imagem aqui, ou clique para selecionar"
            : "Solte a imagem aqui"}
        </p>
      </div>
    </div>
  );
};
