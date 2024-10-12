import { TagProps, TagsFieldProps } from "./types";

export type TagsFieldContextDataObject = {
  fieldId: string;
  focused?: boolean;
  tags: Array<TagProps>;
  props: TagsFieldProps;
  setTags: React.Dispatch<React.SetStateAction<Array<TagProps>>>;
  popTags: () => void;
  clearTags: () => void;
  blur: () => void;
  focus: () => void;
  toggleFocus: () => void;
  addTag: (tag: TagProps) => void;
  removeTag: (tagSlag: string) => void;
};
