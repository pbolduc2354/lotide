const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

/*const findKey = function(object, callback) {
  for (let item in object) {
    console.log(callback(item.stars))
    if (callback(item)) {
      return item;
    }
  }
};*/

const findKey = function(obj, callback) {
  for (let items in obj) {
    if (callback(obj[items])) {
      return items;
    }
  }
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");



