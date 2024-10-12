import { useDropZone } from "@components/DropZone/hooks";

import { useEffect } from "react";

export const DropZoneRestInputContent = () => {
  const context = useDropZone();

  useEffect(() => {
    if (context.files.length >= 1) {
      context.setFiles([]);
    }
  }, [context, context.files]);

  return null;
};
