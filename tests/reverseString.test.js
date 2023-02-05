import reverseString from "../code/reverseString";

describe("reverseString", () => {
  it("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("This is a test")).toBe("tset a si sihT");
  });

  it("reverses a string with special characters", () => {
    expect(reverseString("Today I will be productive :)")).toBe(
      "): evitcudorp eb lliw I yadoT"
    );
    expect(reverseString("!@#%!@^")).toBe("^@!%#@!");
  });

  it("throws an error if argument is not a string", () => {
    expect(() => reverseString()).toThrowError("Argument must be a string");
    expect(() => reverseString(null)).toThrowError("Argument must be a string");
    expect(() => reverseString([])).toThrowError("Argument must be a string");
    expect(() => reverseString(123)).toThrowError("Argument must be a string");
  });
});
