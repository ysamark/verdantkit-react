import { describe, expect, it } from "vitest";

import { colors } from "./colors";

describe("Test the colors util", () => {
  it("should generate color variants for a given color code", () => {
    const color = "#bca4eb";
    const colorVariants = colors(color);

    expect(colorVariants).toHaveProperty("50");
    expect(colorVariants).toHaveProperty("100");
    expect(colorVariants).toHaveProperty("200");
    expect(colorVariants).toHaveProperty("300");
    expect(colorVariants).toHaveProperty("400");
    expect(colorVariants).toHaveProperty("500");
    expect(colorVariants).toHaveProperty("600");
    expect(colorVariants).toHaveProperty("700");
    expect(colorVariants).toHaveProperty("800");
    expect(colorVariants).toHaveProperty("900");
  });
});
