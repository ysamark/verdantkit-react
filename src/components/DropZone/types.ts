import { Nullable, Optional } from "@verdantkit/utils";
import { DropzoneProps as ReactDropZoneProps } from "react-dropzone";

import { StateSetter } from "~/types";

export type DropZoneChangeHandlerProps = {
  file: File;
  files: Array<File>;
};

export type DropZoneChangeHandler = (
  props: DropZoneChangeHandlerProps
) => void | Promise<void>;

export type DropZoneProps = React.PropsWithChildren<
  Omit<ReactDropZoneProps, "children"> &
    Partial<{
      height: number;
      name: string;
      defaultValue: string;
      className: string;
      previewStyle: "thumbnail" | "grid" | "list" | "thumbnail-list" | "none";
      onDelete: () => void;
      onChange: DropZoneChangeHandler;
    }>
>;

export type DropZoneComponent = React.FunctionComponent<DropZoneProps>;

export type DropZoneContextDataObject = {
  props: DropZoneProps;
  file: Nullable<File>;
  setFile: StateSetter<Nullable<File>>;
  files: Array<File>;
  setFiles: StateSetter<Array<File>>;
  dropError: boolean;
  setDropError: StateSetter<boolean>;
  defaultValueState: React.MutableRefObject<Array<Optional<string>>>;
  hasValidFileObject: () => boolean;
};

export type FilePreviewProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "id"
> & {
  id: number;
  file: File;
  height?: number;
};
