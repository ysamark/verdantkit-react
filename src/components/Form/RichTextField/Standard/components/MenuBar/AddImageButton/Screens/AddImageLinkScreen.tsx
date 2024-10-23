import { noEmpty } from "@verdantkit/utils";
import { useState } from "react";

import { useDropDown } from "@components/DropDown";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { TextField } from "@components/Form/TextField";
import { loadImageFromUrl } from "~/utils/loadImageFromUrl";

export const AddImageLinkScreen = () => {
  const [imageLinks, setImageLinks] = useState<string>("");

  const { editor } = useStandardRichTextFieldContext();
  const dropDown = useDropDown();

  const formSubmitHandler: React.FormEventHandler = async (event) => {
    event.preventDefault();

    const imageFileObjects = await Promise.all(
      imageLinks.split(/\s+/).map(async (imageLink) => {
        const imageFileObject = await loadImageFromUrl(imageLink);

        if (!imageFileObject) {
          return imageLink;
        }

        return imageFileObject;
      })
    );

    const loadedImages = imageFileObjects.filter(
      (imageFileObject) => imageFileObject instanceof File
    );

    const fileUrls = loadedImages.map((file) => URL.createObjectURL(file));

    if (!editor) {
      return;
    }

    if (fileUrls.length >= 1) {
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
    }
  };

  const textFieldChangeHandler: React.ChangeEventHandler = (event) => {
    setImageLinks((event.target as HTMLInputElement).value);
  };

  const resolveButtonLabel = () => {
    let label = "Inserir";

    if (noEmpty(imageLinks)) {
      const linksCount = imageLinks.split(/\s+/).length;
      label += ` ${linksCount} image${linksCount >= 2 ? "ns" : "m"}`;
    }

    return label;
  };

  return (
    <form
      method="post"
      action="/#add-image-by-link"
      onSubmit={formSubmitHandler}
      className="flex w-full flex-col gap-3 pb-3"
    >
      <p className="font-bold text-zinc-400 dark:text-zinc-200 lg:text-3xl">
        Inserir link de imagem
      </p>
      <div className="block w-full">
        <TextField
          label="Link da imagem"
          name="editor[image-link]"
          onChange={textFieldChangeHandler}
        />
      </div>
      <button
        type="submit"
        disabled={!noEmpty(imageLinks)}
        className="w-full rounded-md px-3 pt-4 pb-5 bg-primary-200 disabled:opacity-85 disabled:cursor-not-allowed enabled:hover:bg-primary-300 enabled:active:bg-primary-400 leading-none enabled:cursor-pointer text-white enabled:active:scale-95 transition-transform"
      >
        {resolveButtonLabel()}
      </button>
    </form>
  );
};
