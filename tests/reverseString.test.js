import reverseString from "../code/reverseString";

test("One word string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Sentence string", () => {
  expect(reverseString("This is a test")).toBe("tset a si sihT");
});

test("Special characters", () => {
  expect(reverseString("Today I'm going to be productive :)")).toBe(
    "): evitcudorp eb ot gniog m'I yadoT"
  );
});

test("Is undefined", () => {
  expect(reverseString()).toBe("Error");
});

test("Is null", () => {
  expect(reverseString(null)).toBe("Error");
});

test("Is boolean", () => {
  expect(reverseString(true)).toBe("Error");
});

test("Is number", () => {
  expect(reverseString(12345)).toBe("Error");
});
