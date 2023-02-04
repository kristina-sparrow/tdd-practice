function caesarCipher(str, key) {
  key = key % 26;
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (char.match(/[a-z]/i)) {
        const offset = charCode <= 90 ? 65 : 97;
        return String.fromCharCode(
          ((charCode - offset + key + 26) % 26) + offset
        );
      }
      return char;
    })
    .join("");
}

export default caesarCipher;
