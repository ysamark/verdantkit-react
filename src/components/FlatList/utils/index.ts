import { noEmpty, strMatches } from "@verdantkit/utils";

type Data = Record<string, any>;

export const listItemDataFilter = (listItem: Data, query: string): boolean => {
  if (!noEmpty(query)) {
    return true;
  }

  if (!(typeof listItem === "object" && listItem)) {
    return false;
  }

  const listItemKeyValues = Object.values(listItem);

  for (const listItemData of listItemKeyValues) {
    if (noEmpty(listItemData) && strMatches(query, listItemData)) {
      return true;
    }
  }

  return false;
};
