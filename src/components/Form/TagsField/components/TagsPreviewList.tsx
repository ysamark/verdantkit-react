import { TagPreview } from "@components/Form/TagsField/TagPreview";
import { TagProps } from "@components/Form/TagsField/types";
import { useTagsField } from "~/components/Form/TagsField/hooks";

type TagsPreviewListProps = React.PropsWithChildren;

type TagsPreviewListComponent = React.FunctionComponent<TagsPreviewListProps>;

export const TagsPreviewList: TagsPreviewListComponent = ({ children }) => {
  const { tags, props, setTags } = useTagsField();

  const initialTags =
    props.initialData instanceof Array ? props.initialData : [];

  const tagDeleteHandler = (deletedTag: TagProps) => {
    setTags(tags.filter((currentTag) => currentTag.id !== deletedTag.id));

    if (initialTags.some(({ id }) => deletedTag.id === id)) {
      setTags(
        tags.map((tag) => {
          if (tag.id !== deletedTag.id) {
            return tag;
          }

          return {
            ...tag,
            deleted: true,
          };
        })
      );
    }
  };

  return (
    <ul className="w-full flex flex-row gap-2 flex-wrap">
      {tags.map((tag) => {
        return (
          <TagPreview
            key={tag.id}
            id={tag.id}
            slag={tag.slag}
            title={tag.title}
            name={props.name}
            onDelete={tagDeleteHandler}
          />
        );
      })}
      {children}
    </ul>
  );
};
