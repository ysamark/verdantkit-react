import { noEmpty } from "@verdantkit/utils";

import { cn } from "~/utils";
import { DeletedTags } from "./components/DeletedTags";
import { TagInput } from "./components/TagInput";
import { TagsPreviewList } from "./components/TagsPreviewList";
import { TagsFieldContextProvider } from "./context";
import { useTagsFieldDataObject } from "./hooks";
import { TagsFieldComponent } from "./types";

export const TagsField: TagsFieldComponent = (props) => {
  const initialTags =
    props.initialData instanceof Array ? props.initialData : [];

  const fieldLabelText = noEmpty(props.label) ? props.label : "Tags";

  const tagsFieldContextDataObject = useTagsFieldDataObject(initialTags, props);

  return (
    <TagsFieldContextProvider value={tagsFieldContextDataObject}>
      <label
        htmlFor={tagsFieldContextDataObject.fieldId}
        className={cn(
          "w-full rounded-md block py-[18px] transition-shadow px-3 border-[1px] border-solid mb-4 cursor-text bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600",
          tagsFieldContextDataObject.focused
            ? "shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] border-[#86b7fe]"
            : null
        )}
      >
        <div className="w-full block pb-6">
          <h5 className="font-semibold select-none text-sm text-zinc-900 dark:text-zinc-50">
            {fieldLabelText}
          </h5>
        </div>
        <div className="w-full block">
          <TagsPreviewList>
            <li className="inline-flex">
              <TagInput />
            </li>
          </TagsPreviewList>
        </div>
        <DeletedTags />
      </label>
    </TagsFieldContextProvider>
  );
};
