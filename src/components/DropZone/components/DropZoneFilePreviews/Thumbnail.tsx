import { noEmpty } from "@verdantkit/utils";

import { useDropZone } from "@components/DropZone/hooks";

export const DropZoneThumbnailFilePreviews = () => {
  const context = useDropZone();

  const usingDefaultPreviewStyle = Boolean(
    !noEmpty(context.props.previewStyle) ||
      context.props.previewStyle === "thumbnail"
  );

  if (!(context.hasValidFileObject() && usingDefaultPreviewStyle)) {
    return null;
  }

  const resolveFilePreviewUrl = (): string => {
    if (context.file instanceof File) {
      return URL.createObjectURL(context.file);
    }

    const [defaultValue] = context.defaultValueState.current;

    return noEmpty(defaultValue) ? defaultValue : "";
  };

  return (
    <div
      style={{ backgroundImage: `url(${resolveFilePreviewUrl()})` }}
      className="w-full h-full absolute top-0 left-0 right-0 pointer-events-none bg-no-repeat bg-cover bg-scroll bg-center rounded-lg cursor-none opacity-70"
    />
  );
};
