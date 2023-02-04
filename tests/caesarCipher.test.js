import caesarCipher from "../code/caesarCipher";

describe("caesarCipher", () => {
  it("should encode the string correctly with a positive key", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("should encode the string correctly with a negative key", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });

  it("should encode uppercase letters correctly", () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
  });

  it("should encode non-alphabetic characters without modification", () => {
    expect(caesarCipher("abc!@#$%", 3)).toBe("def!@#$%");
  });
});
