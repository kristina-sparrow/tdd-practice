const calculator = {
  add: (a, b) => {
    checkArguments(a, b);
    return a + b;
  },
  subtract: (a, b) => {
    checkArguments(a, b);
    return a - b;
  },
  divide: (a, b) => {
    checkArguments(a, b);
    if (b === 0) throw new Error("Cannot divide by 0");
    return a / b;
  },
  multiply: (a, b) => {
    checkArguments(a, b);
    return a * b;
  },
};

function checkArguments(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
}

export default calculator;
