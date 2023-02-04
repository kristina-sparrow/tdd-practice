function capitalize(str) {
  if (str === undefined || str === null) return "";

  let newString = "";
  let capitalizeNext = true;

  for (let char of str) {
    if (capitalizeNext && /[a-z]/i.test(char)) {
      newString += char.toUpperCase();
      capitalizeNext = false;
    } else {
      newString += char;
      capitalizeNext = /[^a-z]/i.test(char);
    }
  }
  return newString;
}

export default capitalize;
