import { DropZoneFilePreview } from "@components/DropZone/components/DropZoneFilePreview";
import { DropZoneRestInput } from "@components/DropZone/components/DropZoneRestInput";
import { useDropZone } from "@components/DropZone/hooks";

export const DropZoneThumbnailListFilePreviews = () => {
  const context = useDropZone();

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center py-3">
      {context.files.map((file, fileIndex) => (
        <DropZoneFilePreview
          height={160}
          file={file}
          id={fileIndex}
          key={fileIndex}
        />
      ))}
      <DropZoneRestInput height={160} />
    </div>
  );
};
