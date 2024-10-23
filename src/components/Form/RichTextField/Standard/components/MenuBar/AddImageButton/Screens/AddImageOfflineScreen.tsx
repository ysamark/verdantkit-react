import { useDropDown } from "@components/DropDown";
import { DropZone, DropZoneChangeHandler } from "@components/DropZone";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";

export const AddImageOfflineScreen = () => {
  const { editor } = useStandardRichTextFieldContext();
  const dropDown = useDropDown();

  const dropZoneChangeHandler: DropZoneChangeHandler = ({ files }) => {
    const fileUrls = files.map((file) => URL.createObjectURL(file));

    if (!editor) {
      return;
    }

    editor
      .chain()
      .focus()
      .insertContent(
        fileUrls.map((src) => ({
          type: "image",
          attrs: {
            src,
          },
        }))
      )
      .run();

    dropDown.setShow(false);
  };

  return (
    <DropZone
      height={230}
      name="image-file"
      accept={{
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/gif": [".gif"],
      }}
      multiple={true}
      onChange={dropZoneChangeHandler}
    />
  );
};
