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

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log(itemsToRemove[j])
      if (source[i] === itemsToRemove[j]) {
        //console.log("newArray");
        newArray.splice(i, 1);
      }
    }
  }
  //console.log(newArray);
  return newArray;
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without(["Banana", "Jello", "rice"], ["Jello"]), ["Banana", "rice"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]