import {
  generateRandomId,
  generateSlagFromTitle,
  noEmpty,
} from "@verdantkit/utils";

import { TagProps } from "@components/Form/TagsField/types";
import { useTagsField } from "~/components/Form/TagsField/hooks";
import { sanitizeSlagTitle } from "~/utils";

export const TagInput = () => {
  const { tags, props, fieldId, setTags, ...context } = useTagsField();

  const inputKeyUpHandler: React.KeyboardEventHandler = (event) => {
    const pressedKey = event.key.toLowerCase();

    if (event.ctrlKey && pressedKey === "v") {
      const inputElement = event.target as HTMLInputElement;
      const inputElementValue = inputElement.value
        .split(",")
        .filter((tagSlag) => noEmpty(tagSlag))
        .map((tagSlag) => tagSlag.trim())
        .map<TagProps>((tagSlag) => {
          const title = sanitizeSlagTitle(tagSlag);

          return {
            title,
            id: generateRandomId(),
            slag: generateSlagFromTitle(title),
          };
        });

      setTags([...tags, ...inputElementValue]);

      inputElement.value = "";
    }
  };

  const inputKeyDownHandler: React.KeyboardEventHandler = (event) => {
    const tagListSeparatorKeys = [",", ";", "enter"];
    const pressedKey = event.key.toLowerCase();
    const inputElement = event.target as HTMLInputElement;

    if (tagListSeparatorKeys.indexOf(pressedKey) >= 0) {
      event.preventDefault();

      const inputElement = event.target as HTMLInputElement;

      setTags([
        ...tags,
        {
          id: generateRandomId(),
          slag: generateSlagFromTitle(inputElement.value, false),
          title: inputElement.value,
        },
      ]);

      inputElement.value = "";
    }

    if (
      "backspace" === pressedKey &&
      !noEmpty(inputElement.value) &&
      tags.length >= 1
    ) {
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <input
      {...props}
      name={undefined}
      id={fieldId}
      type="text"
      autoCapitalize="off"
      autoComplete="off"
      spellCheck={false}
      onKeyDown={inputKeyDownHandler}
      onKeyUp={inputKeyUpHandler}
      onFocus={() => context.focus()}
      onBlur={() => context.blur()}
      className="ml-3 outline-0 bg-transparent border-0 text-xl font-light dark:text-zinc-50"
    />
  );
};
