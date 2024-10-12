import { noEmpty, Nullish, strMatches } from "@verdantkit/utils";

import { SelectListItemProps } from "@components/SelectList/types";

export const listFilter = (
  listItem: SelectListItemProps,
  query: Nullish<string>
) => {
  // const query = context.query;

  if (!noEmpty(query)) {
    return true;
  }

  return Boolean(
    strMatches(listItem.title, query) ||
      strMatches(listItem.subTitle || "", query)
  );
};
