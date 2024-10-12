import React from "react";

export type FontAwesome6Icons = typeof import("react-icons/fa6");
export type FontAwesome6IconName = keyof FontAwesome6Icons;

export type StateSetter<DataType> = React.Dispatch<
  React.SetStateAction<DataType>
>;
