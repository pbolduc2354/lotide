const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

const countLetters = function(string) {
  const result = {};
  for (const letter of string) {
    //console.log(letter);
    if (letter && letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  console.log(result);
  return result;
};


countLetters("lighthouse in the house");