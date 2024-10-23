type MapArrayRev = {
  [key: number]: number;
};

export const mapArrayRev = (arr: Array<number>): MapArrayRev => {
  const map: MapArrayRev = {};

  let i = 1;

  for (; i <= arr.length; i++) {
    const itemMatchValueIndex = i === 0 ? -1 + arr.length : -1 * i;
    const itemMatchValue = arr.slice(itemMatchValueIndex);
    map[i] = itemMatchValue.length >= 1 ? itemMatchValue[0] : -1;
  }

  return map;
};
