import { Button } from "@components/Form/RichTextField/Standard/components/MenuBar/Button";
import { EditorMenuListItem } from "@components/Form/RichTextField/Standard/components/MenuBar/EditorMenuListItem";
import { useStandardRichTextFieldContext } from "@components/Form/RichTextField/Standard/hooks";
import { FontAwesome6IconName } from "~/types";

type ListTypesMap = {
  [key: string]: FontAwesome6IconName;
};

export const ListUtilitiesButtons = () => {
  const { activeClass } = useStandardRichTextFieldContext();

  const resolveSelectedListIcon = (): FontAwesome6IconName => {
    const listTypesMap: ListTypesMap = {
      task: "FaListCheck",
      bullet: "FaListUl",
      ordered: "FaListOl",
    };

    for (const key in listTypesMap) {
      if (activeClass(`${key}List`)) {
        return listTypesMap[key];
      }
    }

    return "FaListCheck";
  };

  return (
    <EditorMenuListItem>
      <Button icon={resolveSelectedListIcon()} dropdown={true}>
        <Button
          icon="FaListCheck"
          onClick={(chain) => chain.focus().toggleTaskList()}
          className={activeClass("taskList")}
        />
        <Button
          icon="FaListUl"
          onClick={(chain) => chain.focus().toggleBulletList()}
          className={activeClass("bulletList")}
        />
        <Button
          icon="FaListOl"
          onClick={(chain) => chain.focus().toggleOrderedList()}
          className={activeClass("orderedList")}
        />
      </Button>
    </EditorMenuListItem>
  );
};
