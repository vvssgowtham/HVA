numbers=[1,2,3,4,5];

//forEach 
numbers.forEach((element)=>{
    console.log(element);
})

console.log("....................");

numbers.forEach((element)=>{
    console.log(element*2);
})

console.log("....................")

const squaredNumbersNormal = numbers.map(function(element){
    return element*element;
})

console.log(squaredNumbersNormal);

const squaredNumbers = numbers.map((element)=>{
    return element*element;
})

console.log(squaredNumbers);

console.log("....................")

const evenNumbersNormal = numbers.filter(function(element){
    return element%2===0;
})

console.log(evenNumbersNormal);

const evenNumbers = numbers.filter((element)=>{
    return element%2===0;
})

console.log(evenNumbers);