function greet(name){
    return "Hello, "+name+"!"
}
console.log(greet("Gowtham"));

const greetDefault = (name="Guest") => {
    return "Hello, "+name+"!"
}

console.log(greetDefault("Varun"));
console.log(greetDefault());

const greetFunction = function greetOverWritten(name) {
    return "Hello, "+name+"!"
}

console.log(greetFunction("Jeevan Mentor :) Cool!!!!!!!!"))

const greetArrow = (name) => {
    return "Hello, "+name+"!"
}

console.log("ArrowFunction");