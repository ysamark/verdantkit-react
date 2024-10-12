import { generateSlagFromTitle } from "@verdantkit/utils";
import { Fragment } from "react";

import {
  fieldNameSplit,
  resolveFieldName,
} from "@components/Form/TagsField/utils";
import { useTagsField } from "~/components/Form/TagsField/hooks";

export const DeletedTags = () => {
  const { tags, props } = useTagsField();

  const [fieldNameHead, fieldNameTail] = fieldNameSplit(props.name || "slag");

  const fieldName = resolveFieldName(
    `${fieldNameHead}[deleted]${fieldNameTail}`
  );

  return (
    <Fragment>
      {tags
        .filter((tag) => tag.deleted)
        .map((deletedTag) => (
          <input
            key={deletedTag.id}
            type="hidden"
            name={`${fieldName}`}
            value={generateSlagFromTitle(deletedTag.title)}
          />
        ))}
    </Fragment>
  );
};
