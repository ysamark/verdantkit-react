export type CursorStyle = "standard" | "radial";

export type Cords = Axises & Sizes;

export type Axises = {
  x: number;
  y: number;
};

export type Sizes = {
  width: number;
  height: number;
};

export type SelectCursorAxis = Axises & {
  state: Axises;
};
