//A higher-order function is a function that can take other functions as arguments or return them as results.

function higherOrderFunction(num,callback){
    callback(num);
}

function callbackFunction(number){
    console.log(number);
}

higherOrderFunction(5,callbackFunction)



function higherOrderFunction2(num,callback){
    callback(num);
}

function callbackFunction2(number){
    console.log(number*number);
}

higherOrderFunction2(5,callbackFunction2)


function higherOrderFunction3(num1,num2,callback){
    callback(num1,num2);
}

function callbackFunction3(num1,num2){
    console.log(num1+num2);
}

higherOrderFunction3(5,6,callbackFunction3)