const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("🛑🛑🛑 Assertion Failed: " + array1 + " !== " + array2);
      return false;
    }
  }
  console.log("✅✅✅ Assertion Passed: " + array1 + " === " + array2);
  return true;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
};

const middle = function(array) {
  let middleNum = Math.floor(array.length / 2);
  let returnArray = [];
  if (array.length === 1 || array.length === 2) {
    return returnArray;
  } else if (array.length % 2 !== 0) {
    returnArray.push(array[middleNum]);
  } else {
    returnArray.push(array[middleNum], array[middleNum + 1]);
  }
  console.log(returnArray);
  return returnArray;
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]