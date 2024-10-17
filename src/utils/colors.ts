import { range } from "@verdantkit/utils";
import { shade } from "polished";

type Colors = {
  [tone: number]: string;
};

export const colors = (color: string): Colors => {
  const tones = [50, ...range(1, 9).map((level) => level * 100)];

  const colors: Colors = {};

  for (const tone of tones) {
    colors[tone] = shade(tone / 1000, color);
  }

  return colors;
};
