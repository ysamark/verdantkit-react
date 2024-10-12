import { Nullish } from "@verdantkit/utils";

export type TagProps = {
  id?: Nullish<string>;
  slag?: Nullish<string>;
  deleted?: Nullish<boolean>;
  title: string;
};

export type TagsFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  initialData?: Array<TagProps>;
  onTagAdded?: (tagSlag: string) => void;
  onTagRemoved?: (tagSlag: string) => void;
  onTagUpdated?: (newTagSlag: string, oldTagSlag: string) => void;
};

export type TagsFieldComponent = React.FunctionComponent<TagsFieldProps>;
