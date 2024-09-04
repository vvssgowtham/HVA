function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10));

function calculateAreaWithDefault(width = 1, height = 1) {
    return width * height;
}

console.log(calculateAreaWithDefault(100, 200));
console.log(calculateAreaWithDefault());

const calculateAreaFunction = function calculateArea(width, height) {
  return width * height;
};

console.log(calculateAreaFunction(5,10));

const calculateAreaArrowFunction = (width, height)=> {
    return width * height;
  }
  
console.log(calculateAreaArrowFunction(50, 100));