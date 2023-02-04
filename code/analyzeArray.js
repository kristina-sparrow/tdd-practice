function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("All elements in the array must be numbers");
    }
  }

  const sum = arr.reduce((total, num) => total + num);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}

export default analyzeArray;
