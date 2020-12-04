const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //console.log("false");
      return false;
    }
  }
  //console.log("true");
  return true;
};

const eqObjects = function(object1, object2) {
  let results = true;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const element in object1) {
      if (Array.isArray(object1[element])) {
        results = eqArrays(object1[element], object2[element]);
      } else if (object1[element] !== object2[element]) {
        results = false;
      }
    }
    return results;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const res = eqObjects(actual, expected);
  if (res) {
    console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + inspect(actual) + " !== " + inspect(expected));
  }
};

assertObjectsEqual({a: ["1", 2], b:"2"}, {b: "2", a:["1", 2]});
assertObjectsEqual({a: "1", b:"2"}, {c:"3", b: "2", a:"1"});