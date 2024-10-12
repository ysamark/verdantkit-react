import { useDropZone } from "@components/DropZone/hooks";
import { noEmpty } from "@verdantkit/utils";

import { DropZoneGridFilePreviews } from "./DropZoneFilePreviews/Grid";
import { DropZoneListFilePreviews } from "./DropZoneFilePreviews/List";
import { DropZoneThumbnailListFilePreviews } from "./DropZoneFilePreviews/ThumbnailList";

export const DropZoneFilePreviews = () => {
  const context = useDropZone();

  const usingDefaultPreviewStyle = Boolean(
    !noEmpty(context.props.previewStyle) ||
      context.props.previewStyle === "thumbnail"
  );

  if (context.files.length <= 0 || usingDefaultPreviewStyle) {
    return null;
  }

  switch (context.props.previewStyle) {
    case "grid":
      return <DropZoneGridFilePreviews />;

    case "list":
      return <DropZoneListFilePreviews />;

    case "thumbnail-list":
      return <DropZoneThumbnailListFilePreviews />;

    default:
      return null;
  }
};
