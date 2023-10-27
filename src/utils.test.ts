import { expect } from "@jest/globals";
// import { describe, expect, test } from "@jest/globals";
import test, { describe } from "node:test";
import { checkCrossLines } from "./utils";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    const lines = [
      {
        seg1: {
          x1: -1,
          x2: 1,
          y1: 6,
          y2: 2,
        },
        seg2: {
          x3: -2,
          x4: 2,
          y3: 5,
          y4: 3,
        },
      },
    ];
    lines.forEach(({ seg1, seg2 }) => {
      expect(checkCrossLines(seg1, seg2)).toBe({ x: 0, y: 4 });
    });
  });
});
