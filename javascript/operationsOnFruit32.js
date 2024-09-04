const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("...........................");

let totalCharacters = 0;

fruits.forEach(function (fruit) {
  totalCharacters += fruit.length;
});

console.log(totalCharacters);

let totalCharactersnew = 0;

fruits.forEach((fruit) => {
  totalCharactersnew += fruit.length;
});

console.log(totalCharactersnew);

console.log("...........................");

const reversedFruits = fruits.map(function (fruit) {
  return fruit.split("").reverse().join("");
});

console.log(reversedFruits);

const reversedFruitsArrow = fruits.map(function (fruit) {
  return fruit.split("").reverse().join("");
});

console.log(reversedFruitsArrow);

console.log("...........................");

const longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});

console.log(longFruits);

const longFruitsArrow = fruits.filter((fruit) => {
  return fruit.length > 5;
});

console.log(longFruitsArrow);

console.log("...........................");

const aFruitsUpper = fruits
  .filter((fruit) => {
    return fruit.includes("a");
  })
  .map((fruit) => {
    return fruit.toUpperCase();
  });

console.log(aFruitsUpper);