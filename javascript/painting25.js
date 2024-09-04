const areaOfRectangle = (length, width) => {
  return length * width;
};

const areaOfCircle = (radius) => {
  const pi = Math.PI;
  return pi * radius * radius;
};

const areaOfTriangle = (base, height) => {
  return 0.5 * base * height;
};

const calculatePaintingCost = (dimension1, dimension2, calculateArea) => {
  const area = calculateArea(dimension1, dimension2);
  const costPerUnit = 2; // Cost per square unit
  const totalCost = area * costPerUnit;
  return totalCost;
};

const length = 5;
const width = 10;
const rectangleCost = calculatePaintingCost(length, width, areaOfRectangle);
console.log(`The cost for painting the rectangle is $${rectangleCost}`);

const radius = 3;
const circleCost = calculatePaintingCost(radius, null, areaOfCircle);
console.log(`The cost for painting the circle is $${circleCost}`);

const base = 4;
const height = 7;
const triangleCost = calculatePaintingCost(base, height, areaOfTriangle);
console.log(`The cost for painting the triangle is $${triangleCost}`);
