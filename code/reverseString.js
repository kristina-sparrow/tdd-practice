function reverseString(str) {
  if (typeof str !== "string") return "Error";
  return str.split("").reverse().join("");
}

export default reverseString;
