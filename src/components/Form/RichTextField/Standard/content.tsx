import { EditorContent } from "@tiptap/react";
import { forwardRef, useEffect, useRef } from "react";

import { RichTextWrapper } from "@components/RichTextWrapper";
import { ScrollArea } from "@components/ScrollArea";
import { cn } from "@lib/utils";

import { EditorOutput } from "./components/EditorOutput";
import { MenuBar } from "./components/MenuBar";
import { TipTapBubbleMenu } from "./components/TipTapBubbleMenu";
import { TipTapFloatingMenu } from "./components/TipTapFloatingMenu";
import { useStandardRichTextFieldContext } from "./hooks";
// import { getSelectElementToolbarCoordinates } from "./utils/getSelectElementToolbarCoordinates";
import { updateMenuBarPosition } from "./utils/updateMenuBarPosition";

export const StandardRichTextFieldContent = forwardRef<HTMLInputElement>(
  (_props, ref) => {
    // const [showSelectedElementToolbar, setShowSelectedElementToolbar] =
    //   useState<boolean>(false);

    const menuBarRef = useRef<HTMLDivElement>(null);
    const editorContentRef = useRef<HTMLDivElement>(null);
    // const selectedElementToolbarRef = useRef<HTMLDivElement>(null);

    const { editor, fixed, setEditorWidth } = useStandardRichTextFieldContext();

    // const selectedElementState = useRef<HTMLElement>();

    // const ContainerElement = fixed ? FixedContainer : Container;

    useEffect(() => {
      if (!editorContentRef.current) {
        return;
      }

      const editorContentResizeObserver = new window.ResizeObserver(() => {
        if (!editorContentRef.current) {
          return;
        }

        const { width } = editorContentRef.current.getBoundingClientRect();

        setEditorWidth(width);
      });

      // const selectedElementWatcher = () => {
      //   const getSelectElementToolbarCoordinatesResponse =
      //     getSelectElementToolbarCoordinates({ editorContentRef });

      //   if (getSelectElementToolbarCoordinatesResponse) {
      //     const { selectElementToolbarCoordinates } =
      //       getSelectElementToolbarCoordinatesResponse;

      //     if (!showSelectedElementToolbar) {
      //       setShowSelectedElementToolbar(true);
      //     }

      //     const selectedElementToolbar = selectedElementToolbarRef.current;

      //     if (selectedElementToolbar instanceof HTMLDivElement) {
      //       Object.assign(selectedElementToolbar.style, {
      //         top: `${selectElementToolbarCoordinates.y}px`,
      //         left: `${selectElementToolbarCoordinates.x}px`,
      //         width: `${selectElementToolbarCoordinates.width}px`,
      //       } as React.CSSProperties);

      //       selectedElementState.current =
      //         getSelectElementToolbarCoordinatesResponse.selectedElement;
      //     }
      //   } else if (showSelectedElementToolbar) {
      //     setShowSelectedElementToolbar(false);
      //   }

      //   return window.requestAnimationFrame(selectedElementWatcher);
      // };

      // const selectedElementWatcherAnimationFrame = selectedElementWatcher();

      const windowScrollHandler = () => {
        updateMenuBarPosition({ editorContentRef, menuBarRef });
      };

      editorContentResizeObserver.observe(editorContentRef.current);
      window.addEventListener("scroll", windowScrollHandler);

      return () => {
        editorContentResizeObserver.disconnect();
        window.removeEventListener("scroll", windowScrollHandler);
        // window.cancelAnimationFrame(selectedElementWatcherAnimationFrame);
      };
    });

    return (
      <div
        className={cn(
          "w-full h-auto flex flex-col gap-4",
          fixed
            ? "fixed bg-white h-screen top-0 left-0 right-0 z-20 py-16 px-12"
            : null
        )}
      >
        <MenuBar ref={menuBarRef} editor={editor} />
        <div
          className={cn(
            fixed
              ? ""
              : "border-[1px] p-2 rounded-md border-zinc-300 border-solid dark:border-zinc-700"
          )}
        >
          <ScrollArea className="w-full flex flex-col gap-2 flex-grow h-screen">
            <div className="relative w-full p-5 mx-auto rounded-md [&_*]:whitespace-break-spaces [&_*]:break-words">
              <TipTapBubbleMenu />
              <TipTapFloatingMenu />
              <RichTextWrapper className="[&_.ProseMirror-selectednode]:relative [&_.ProseMirror-selectednode]:z-[1] [&_table_td]:relative [&_table_th]:relative [&_.selectedCell]:relative [&_.selectedCell]:after:bg-neutral-200 [&_.selectedCell]:after:bg-opacity-55 [&_.selectedCell]:after:content-[''] [&_.selectedCell]:after:left-0 [&_.selectedCell]:after:right-0 [&_.selectedCell]:after:top-0 [&_.selectedCell]:after:bottom-0 [&_.selectedCell]:after:pointer-events-none [&_.selectedCell]:after:absolute [&_.selectedCell]:after:z-[2] [&_.column-resize-handle]:bg-primary-300 [&_.column-resize-handle]:-bottom-0.5 [&_.column-resize-handle]:-right-0.5 [&_.column-resize-handle]:pointer-events-none [&_.column-resize-handle]:absolute [&_.column-resize-handle]:top-0 [&_.column-resize-handle]:w-1 [&_.column-resize-handle]:z-[3] [&_.resize-cursor]:cursor-col-resize">
                <EditorContent ref={editorContentRef} editor={editor} />
              </RichTextWrapper>
              <EditorOutput ref={ref} />
            </div>
          </ScrollArea>
          {/* {showSelectedElementToolbar && (
          <div
            className="absolute z-[3] bg-zinc-900 text-zinc-50"
            ref={selectedElementToolbarRef}
          >
            Options for: selectedElement
          </div>
        )} */}
        </div>
      </div>
    );
  }
);
