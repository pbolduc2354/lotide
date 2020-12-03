const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

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

const letterPositions = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    console.log(letter);
    if (results[letter]) {
      results[letter].push(sentence.indexOf(letter));
    } else {
      results[letter] = [];
      results[letter].push(sentence.indexOf(letter));
    }
  }
  console.log(results);
  return results;
};

let result1 = letterPositions("hello");
assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);