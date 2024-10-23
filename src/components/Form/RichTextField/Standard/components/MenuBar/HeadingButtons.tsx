import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { range } from "@verdantkit/utils";

import { cn } from "@lib/utils";
import { mapArrayRev } from "~/utils";

import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const HeadingButtons = () => {
  const { editor, editorWidth } = useStandardRichTextFieldContext();

  const headingsListMap = mapArrayRev(range(1, 6));

  const applyHeading = (size: HeadingLevel = 6) => {
    if (!editor) {
      return;
    }

    editor.chain().focus().toggleHeading({ level: size }).run();
  };

  const headingActiveClass = (level: number) => {
    if (!editor) {
      return undefined;
    }

    return editor.isActive("heading", { level }) ? "x-active" : undefined;
  };

  const resolveSelectedHeadingLabel = () => {
    let i = 1;

    const shouldHideLabel = editorWidth <= 820;

    for (; i < 7; i++) {
      const level = headingsListMap[i];
      if (editor?.isActive("heading", { level })) {
        return (shouldHideLabel ? "" : "Título ") + level;
      }
    }

    return shouldHideLabel ? "" : "Texto normal";
  };

  return (
    <EditorMenuListItem>
      <Button
        icon="FaHeading"
        style={{ width: "128px" }}
        label={resolveSelectedHeadingLabel()}
        dropdown={true}
      >
        <div className="w-64 h-auto flex flex-col items-center">
          {range(1, 6)
            .reverse()
            .map((size) => (
              <button
                key={size}
                type="button"
                role="button"
                onClick={() =>
                  applyHeading(Number(headingsListMap[size]) as HeadingLevel)
                }
                className={cn(
                  headingActiveClass(headingsListMap[size]),
                  "w-full h-auto border-0 outline-0 py-1 px-3 text-left bg-transparent rounded-md whitespace-nowrap overflow-hidden text-ellipsis hover:bg-zinc-200 [&.x-active]:bg-zinc-200 active:bg-zinc-200"
                )}
                style={{
                  fontSize: `${size * 2.2 + 15}px`,
                  fontWeight: `${size * 100}`,
                }}
              >
                <span>Título {headingsListMap[size]}</span>
              </button>
            ))}
        </div>
      </Button>
    </EditorMenuListItem>
  );
};
