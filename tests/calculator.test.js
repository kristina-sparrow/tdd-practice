import calculator from "../code/calculator";

describe("calculator", () => {
  it("should correctly add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(2, -3)).toBe(-1);
  });

  it("should correctly subtract two numbers", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
    expect(calculator.subtract(-2, 3)).toBe(-5);
    expect(calculator.subtract(2, -3)).toBe(5);
  });

  it("should correctly divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(6, -3)).toBe(-2);
  });

  it("should correctly multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(2, -3)).toBe(-6);
  });

  it("should throw an error if the arguments are not numbers", () => {
    expect(() => calculator.add("2", 3)).toThrowError(
      "Both arguments must be numbers"
    );
    expect(() => calculator.subtract(2, "3")).toThrowError(
      "Both arguments must be numbers"
    );
    expect(() => calculator.divide(2, [])).toThrowError(
      "Both arguments must be numbers"
    );
    expect(() => calculator.multiply(2, {})).toThrowError(
      "Both arguments must be numbers"
    );
  });

  it("should throw an error if division by 0 is attempted", () => {
    expect(() => calculator.divide(2, 0)).toThrowError("Cannot divide by 0");
  });
});
