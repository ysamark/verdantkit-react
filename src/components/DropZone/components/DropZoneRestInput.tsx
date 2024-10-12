import { DropZone } from "@components/DropZone";
import { DropZoneRestInputContent } from "@components/DropZone/components/DropZoneRestInputContent";
import { useDropZone } from "@components/DropZone/hooks";
import { DropZoneChangeHandler } from "@components/DropZone/types";
import { cn } from "@lib/utils";

type DropZoneRestInputProps = {
  height?: number;
  className?: string;
};

export const DropZoneRestInput = (props: DropZoneRestInputProps) => {
  const context = useDropZone();

  const dropZoneChangeHandler: DropZoneChangeHandler = ({ files }) => {
    context.setFiles([...context.files, ...files]);
  };

  return (
    <div className={cn("w-full flex flex-grow relative", props.className)}>
      <DropZone
        accept={context.props.accept}
        maxFiles={context.props.maxFiles}
        multiple={context.props.multiple}
        onChange={dropZoneChangeHandler}
        previewStyle="none"
        height={props.height}
      >
        <DropZoneRestInputContent />
      </DropZone>
    </div>
  );
};
