import { useFlatList } from "./useFlatList";

export const useFlatListHTMLAttributes = () => {
  const { props } = useFlatList();

  const breakLineRe = /\n+/;
  const flatListCustomProps = `
    data
    title
    loading
    children
    placeholderCountOnLoading
    itemsCountPerIteration
    paginationStyle
    renderItem
    renderItemPlaceholder
    showSearchBox
  `;

  const flatListCustomPropsList = flatListCustomProps
    .trim()
    .split(breakLineRe)
    .filter((line) => !breakLineRe.test(line))
    .map((line) => line.trim());

  const htmlAttributes: Record<string, any> = {};

  for (const key in props) {
    if (!flatListCustomPropsList.includes(key)) {
      htmlAttributes[key] = props[key as keyof typeof props];
    }
  }

  return htmlAttributes;
};
