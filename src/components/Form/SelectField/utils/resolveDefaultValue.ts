import { noEmpty } from "@verdantkit/utils";

import { OptionProps } from "../types";

export function resolveDefaultValue(
  defaultValue: unknown,
  data: Array<OptionProps>
): OptionProps | undefined {
  if (!noEmpty(defaultValue)) {
    return undefined;
  }

  const defaultOptionObject = data.find(({ value }) => value === defaultValue);

  if (defaultOptionObject) {
    return defaultOptionObject;
  }

  const findOptionByValue = (
    optionValue: string,
    list: Array<OptionProps>
  ): OptionProps | undefined => {
    let i = 0;

    for (; i < list.length; i++) {
      const listItem = list[i];

      if (listItem.value === optionValue) {
        return listItem;
      }

      if (listItem.options instanceof Array && listItem.options.length >= 1) {
        const optionFromListItemChildren = findOptionByValue(
          optionValue,
          listItem.options
        );

        if (optionFromListItemChildren) {
          return optionFromListItemChildren;
        }
      }
    }
  };

  return findOptionByValue(defaultValue, data);
}
