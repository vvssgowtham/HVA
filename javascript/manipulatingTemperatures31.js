temperatures = [-3, 14, 22, 5, -10];

temperatures.forEach(function (element) {
  console.log(element);
});

console.log("....................");

temperatures.forEach((element) => {
  console.log(element);
});

console.log("....................");

temperatures.forEach((element) => {
  console.log((element * 9) / 5 + 32);
});

console.log("....................");

temperatures.forEach(function (element) {
  console.log((element * 9) / 5 + 32);
});

console.log("....................");

const temperaturesInFarenheitNormal = temperatures.map(function (element) {
  return (element * 9) / 5 + 32;
});

console.log(temperaturesInFarenheitNormal);

console.log("....................");

const temperaturesInFarenheitArrow = temperatures.map((element) => {
  return (element * 9) / 5 + 32;
});

console.log(temperaturesInFarenheitArrow);
