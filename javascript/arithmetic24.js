function addNumbers(num1,num2){
    return num1+num2;
}

function mutliplyNumbers(num1,num2){
    return num1*num2;
}

function subtractNumber(num1,num2){
    return num2-num1;
}

function divideNumbers(num1,num2){
    if(num2==0) return -1;
    return num1/num2;
}

function performArithmeticFunction(num1,num2,operation){
    return operation(num1,num2);
}

console.log(performArithmeticFunction(5,3,addNumbers));
console.log(performArithmeticFunction(5,3,subtractNumber));
console.log(performArithmeticFunction(5,3,divideNumbers));
console.log(performArithmeticFunction(5,3,mutliplyNumbers));