import analyzeArray from "../code/analyzeArray";

describe("analyzeArray", () => {
  it("calculates average, min, max, and length correctly for an array of numbers", () => {
    const arr = [1, 8, 3, 4, 2, 6];
    const result = analyzeArray(arr);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("returns correct values for an empty array", () => {
    const arr = [];
    const result = analyzeArray(arr);
    expect(result).toEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });

  it("returns correct values for an array with a single number", () => {
    const arr = [5];
    const result = analyzeArray(arr);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  it("throws an error if any elements in the array are not numbers", () => {
    const arr = [1, 2, "three", 4, 5];
    expect(() => analyzeArray(arr)).toThrowError(
      "All elements in the array must be numbers"
    );
  });
});
