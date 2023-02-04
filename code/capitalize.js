function capitalize(str) {
  if (typeof str !== "string") throw new Error("Argument must be a string");

  let newString = "";
  let capitalized = false;

  for (let char of str) {
    if (/[a-z]/i.test(char) && !capitalized) {
      newString += char.toUpperCase();
      capitalized = true;
    } else {
      newString += char;
    }
  }

  return newString;
}

export default capitalize;
