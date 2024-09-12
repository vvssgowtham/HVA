// Lodash is a popular JavaScript utility library that provides a wide range of helpful functions for working with arrays, objects, strings, and other data types.
const _ = require("lodash")

// _.chunk(array, [size=1])
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.compact(array)
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// _.concat(array, [values])
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]