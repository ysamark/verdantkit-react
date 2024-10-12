import { useContext } from "react";

import { TagsFieldContext } from "@components/Form/TagsField/context";

export * from "./useTagsFieldDataObject";

export const useTagsField = () => useContext(TagsFieldContext);
