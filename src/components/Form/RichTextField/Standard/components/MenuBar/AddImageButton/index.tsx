// import { ChainedCommands } from "@tiptap/react";
import { FaArrowLeft } from "react-icons/fa6";

import { CardButton, CardButtons } from "@components/CardButtons";
import { Button } from "@components/Form/RichTextField/Standard/components/MenuBar/Button";
import { EditorMenuListItem } from "@components/Form/RichTextField/Standard/components/MenuBar/EditorMenuListItem";
// import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import {
  Navigation,
  NavigationBack,
  NavigationButton,
  NavigationHeader,
  NavigationScreen,
} from "@components/Navigation";

import { AddImageLinkScreen } from "./Screens/AddImageLinkScreen";
import { AddImageOfflineScreen } from "./Screens/AddImageOfflineScreen";

export const AddImageButton = () => {
  // const { editor } = useStandardRichTextFieldContext();

  // const addImageOfflineChangeHandler: DropZoneChangeHandler = ({ files }) => {
  //   const fileUrls = files.map((file) => URL.createObjectURL(file));

  //   if (!editor) {
  //     return;
  //   }

  //   editor
  //     .chain()
  //     .focus()
  //     .insertContent(
  //       fileUrls.map((src) => ({
  //         type: "image",
  //         attrs: {
  //           src,
  //         },
  //       }))
  //     )
  //     .run();
  // };

  // const addImageButtonClickHandler = (chain: ChainedCommands) => {
  //   const imageUrl = prompt("Insira a url da imagem");

  //   return chain.focus().setImage({
  //     src: String(imageUrl),
  //   });
  // };

  return (
    <EditorMenuListItem>
      <Button
        icon="FaRegFileImage"
        title="Inserir imagem"
        dropdown
        // onClick={addImageButtonClickHandler}
      >
        <div className="w-96 flex flex-col gap-3">
          <Navigation home="add-image-home">
            <NavigationHeader className="w-full items-center flex flex-row gap-2 mb-3">
              <NavigationBack className="size-7 rounded-full text-[9px] inline-flex justify-center items-center bg-zinc-200 dark:bg-zinc-700 enabled:hover:bg-zinc-300 enabled:dark:hover:bg-zinc-600 enabled:active:scale-95 transition-transform disabled:opacity-25">
                <FaArrowLeft />
              </NavigationBack>
              <strong>Inserir imagens</strong>
            </NavigationHeader>
            <NavigationScreen name="add-image-home">
              <CardButtons>
                <NavigationButton to="add-image-offline" asChild>
                  <CardButton id="a">
                    Selecionar imagem deste computador
                  </CardButton>
                </NavigationButton>
                <NavigationButton to="add-image-link" asChild>
                  <CardButton>Inserir link de imagem</CardButton>
                </NavigationButton>
                {/* <NavigationButton to="select-saved-images" asChild>
                  <CardButton>Selecionar imagens salvas</CardButton>
                </NavigationButton>
                <NavigationButton to="select-images-from-net" asChild>
                  <CardButton>Procurar imagem na internet</CardButton>
                </NavigationButton> */}
              </CardButtons>
            </NavigationScreen>
            <NavigationScreen
              name="add-image-offline"
              className="w-full flex flex-col"
            >
              <AddImageOfflineScreen />
            </NavigationScreen>
            <NavigationScreen
              name="add-image-link"
              className="w-full flex flex-col"
            >
              <AddImageLinkScreen />
            </NavigationScreen>
            <NavigationScreen
              name="select-saved-images"
              className="w-full flex flex-col"
            >
              Selecionar images salvas
            </NavigationScreen>
            <NavigationScreen
              name="select-images-from-net"
              className="w-full flex flex-col"
            >
              Selecionar images da net
            </NavigationScreen>
          </Navigation>
        </div>
      </Button>
    </EditorMenuListItem>
  );
};
