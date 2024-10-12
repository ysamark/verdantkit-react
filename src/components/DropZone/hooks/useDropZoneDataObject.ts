import { noEmpty, Nullable, Optional } from "@verdantkit/utils";
import { useRef, useState } from "react";

import {
  DropZoneContextDataObject,
  DropZoneProps,
} from "@components/DropZone/types";
import { StateSetter } from "~/types";

type UseDropZoneDataObjectHook = (
  props: DropZoneProps
) => DropZoneContextDataObject;

export const useDropZoneDataObject: UseDropZoneDataObjectHook = (props) => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [dropError, setDropError] = useState<boolean>(false);

  const file = files[0] || null;

  const defaultValueState = useRef<Array<Optional<string>>>([
    props.defaultValue,
  ]);

  const hasValidFileObject = (): boolean => {
    return Boolean(file instanceof File || noEmpty(defaultValueState.current));
  };

  // (!noEmpty(props.previewStyle) || props.previewStyle === "thumbnail")

  const setFile: StateSetter<Nullable<File>> = (value) => {
    const fileStateValue = typeof value === "function" ? value(file) : value;

    setFiles(fileStateValue ? [fileStateValue] : []);
  };

  return {
    file,
    setFile,
    files,
    setFiles,
    dropError,
    setDropError,
    defaultValueState,
    props,
    hasValidFileObject,
  };
};
