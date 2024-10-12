import { DropZoneFilePreview } from "@components/DropZone/components/DropZoneFilePreview";
import { DropZoneRestInput } from "@components/DropZone/components/DropZoneRestInput";
import { useDropZone } from "@components/DropZone/hooks";

export const DropZoneGridFilePreviews = () => {
  const context = useDropZone();

  return (
    <div className="w-full flex flex-row flex-wrap gap-2 justify-center items-center py-3">
      {context.files.map((file, fileIndex) => (
        <DropZoneFilePreview
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          height={144}
          file={file}
          id={fileIndex}
          key={fileIndex}
        />
      ))}
      <DropZoneRestInput
        height={144}
        className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
      />
    </div>
  );
};
