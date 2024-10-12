import { noEmpty } from "@verdantkit/utils";
import { Fragment, useState } from "react";
import { FaX } from "react-icons/fa6";

import { sanitizeSlagTitle } from "~/utils";

import { TagProps } from "./types";
import { resolveFieldName } from "./utils";

type TagPreviewProps = TagProps & {
  name?: string;
  onDelete?: (tagProps: TagProps) => void;
  onUpdate?: (newTagProps: TagProps, oldTagProps: TagProps) => void;
};

type TagPreviewComponent = React.FunctionComponent<TagPreviewProps>;

export const TagPreview: TagPreviewComponent = (props) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [slag, setSlag] = useState<string>(props.slag ?? "");

  const inputRef = (inputElement: HTMLInputElement | null) => {
    if (inputElement) {
      inputElement.focus();
    }
  };

  const spanDoubleClickHandler = () => {
    setEditing(true);
  };

  const inputKeyDownHandler: React.KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const oldSlag = slag;
      const inputElement = event.target as HTMLInputElement;

      if (typeof props.onUpdate === "function") {
        props.onUpdate(props, { ...props, slag: oldSlag });
      }

      setSlag(sanitizeSlagTitle(inputElement.value));
      setEditing(false);
    }
  };

  const inputBlurHandler = () => {
    setEditing(false);
  };

  const deleteButtonClickHandler = () => {
    if (typeof props.onDelete === "function") {
      props.onDelete(props);
    }
  };

  const fieldName = resolveFieldName(noEmpty(props.name) ? props.name : "tags");

  return (
    <li className="inline-flex">
      <span
        onDoubleClick={spanDoubleClickHandler}
        className="flex flex-row gap-2 items-center pt-1 pb-2 pl-5 pr-3 rounded-full bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300"
      >
        <input type="hidden" readOnly={true} name={fieldName} value={slag} />
        {(editing && (
          <input
            ref={inputRef}
            type="text"
            defaultValue={slag}
            onKeyDown={inputKeyDownHandler}
            onBlur={inputBlurHandler}
            className="border-0 outline-0 bg-transparent w-max dark:text-zinc-50"
          />
        )) || (
          <Fragment>
            {slag}
            <button
              className="bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 border-0 outline-0 p-2 rounded-full text-sm mt-1"
              type="button"
              onClick={deleteButtonClickHandler}
            >
              <FaX size={10} />
            </button>
          </Fragment>
        )}
      </span>
    </li>
  );
};
