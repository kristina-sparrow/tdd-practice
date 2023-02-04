import capitalize from "../code/capitalize";

test("Capitalize first letter of a sting", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("First letter already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Numbers and special characters", () => {
  expect(capitalize("12@#abcd@#34")).toBe("12@#Abcd@#34");
});

test("Is undefined", () => {
  expect(capitalize()).toBe("");
});

test("Is null", () => {
  expect(capitalize(null)).toBe("");
});
