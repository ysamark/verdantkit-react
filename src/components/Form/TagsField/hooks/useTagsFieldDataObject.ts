import { useId, useState } from "react";

import { TagProps, TagsFieldProps } from "@components/Form/TagsField/types";
import { TagsFieldContextDataObject } from "@components/Form/TagsField/types.context";

type TagsFieldDataObjectHook = (
  initialTags: Array<TagProps>,
  props: TagsFieldProps
) => TagsFieldContextDataObject;

export const useTagsFieldDataObject: TagsFieldDataObjectHook = (
  initialTags,
  props
) => {
  const [tags, setTags] = useState<Array<TagProps>>(initialTags);
  const [focused, setFocus] = useState<boolean>(false);

  const fieldId = useId();

  return {
    tags,
    props,
    fieldId,
    focused,
    setTags: function (value): void {
      setTags(value);
    },
    popTags: function (): void {
      setTags(tags.slice(0, -1));
    },
    clearTags: function (): void {
      setTags([]);
    },
    addTag: function (tag: TagProps): void {
      setTags([...tags, tag]);
    },
    removeTag: function (tagSlag: string): void {
      setTags(tags.filter((tag) => tag.slag !== tagSlag));
    },
    blur: function () {
      setFocus(false);
    },
    focus: function () {
      setFocus(true);
    },
    toggleFocus: function () {
      setFocus(!focused);
    },
  };
};
