import capitalize from "../code/capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("hello, world!")).toBe("Hello, world!");
    expect(capitalize("This is a test")).toBe("This is a test");
  });
  it("should not affect characters other than the first letter character", () => {
    expect(capitalize("hELLo")).toBe("HELLo");
    expect(capitalize("TEST")).toBe("TEST");
  });
  it("should capitalize the first letter even if it is not the first character", () => {
    expect(capitalize("12@#abcd@#34")).toBe("12@#Abcd@#34");
    expect(capitalize("12@#Abcd@#34")).toBe("12@#Abcd@#34");
  });
  it("should throw an error if the argument is not a string", () => {
    expect(() => capitalize(undefined)).toThrowError(
      "Argument must be a string"
    );
    expect(() => capitalize(null)).toThrowError("Argument must be a string");
    expect(() => capitalize([])).toThrowError("Argument must be a string");
    expect(() => capitalize({})).toThrowError("Argument must be a string");
  });
});
