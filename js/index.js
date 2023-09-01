console.log(binaryArrayToNumber([0, 0, 0, 1]));

function binaryArrayToNumber(arr) {
  const replace = arr.reduce((acc, val) => acc + val, "");
  return parseInt(replace, 2);
}
