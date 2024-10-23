import { Editor } from "@tiptap/react";
import { forwardRef } from "react";

import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { cn } from "@lib/utils";

import { AddImageButton } from "./AddImageButton";
import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";
import { EditorUtilitiesButtons } from "./EditorUtilitiesButtons";
import { ListUtilitiesButtons } from "./EditorUtilitiesButtons/ListUtilitiesButtons";
import { HeadingButtons } from "./HeadingButtons";
import { HistoryButtons } from "./HistoryButtons";
import { MaximizeButton } from "./MaximizeButton";
import { Separator } from "./Separator";
import { TableDropDownContent } from "./TableDropDownContent";
import { TextAlignButtons } from "./TextAlignButtons";
import { TextFormattingButtons } from "./TextFormattingButtons";

type MenuBarProps = {
  editor: Editor | null;
};

// type MenuBarComponent = React.FunctionComponent<MenuBarProps>;

export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  function MenuBar(props, ref) {
    const { fixed } = useStandardRichTextFieldContext();

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "h-auto relative z-[3] bg-white dark:bg-zinc-950 block p-3 border-[1px] border-solid border-zinc-300 dark:border-zinc-800 rounded-md",
          fixed
            ? "w-[calc(100%)] fixed top-0 left-0 right-0 bg-white dark:bg-zinc-800 rounded-0 z-[4] py-5 px-5"
            : "w-full"
        )}
      >
        <ul className="w-full flex flex-row items-center justify-center gap-2 flex-wrap min-[600px]:flex-nowrap">
          <HistoryButtons />
          <Separator />
          <MaximizeButton />
          <Separator />
          <HeadingButtons />
          {/* <Separator />
          <FontSizeOptions /> */}
          <Separator />
          <TextFormattingButtons />
          {/* <Separator />
          <TextColoringButton /> */}
          <Separator />
          <EditorUtilitiesButtons />
          <AddImageButton />
          <Separator />
          <TextAlignButtons />
          <ListUtilitiesButtons />
          <EditorMenuListItem>
            <Button icon="FaTable" dropdown>
              <TableDropDownContent />
            </Button>
          </EditorMenuListItem>
        </ul>
      </div>
    );
  }
);
