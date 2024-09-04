//async and await

//fetchAPI.js file if u observe while fetching data again promise chaining is used which again makes whole thing complicated. So using async and await we get it resolved.

//what we do here is we put our entire asynchronous code into a single function and then we use await keyword inside to chain promises together in a much more readable and logical way.

//asynchronous function always returns promise

console.log(1);
const getTodos = async () => {
  //what await does is does the fetch and that returns a promise and that await keyword stops it from assigning value to response variable until the promise has resolved. Once the promise got resolved we can take that value and assign it to the variable named response.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/6");
  //json method itself is asynchronous and returns promise
  //simply await is used to chain all the promises until it gets resolved under the hood.
  const data = await response.json();
  return data;
};

//here .then() and .catch() is used because asynchronous function always returns a promise based on the result it can be resolved or rejected
getTodos()
  .then((data) => console.log("Resolved: ", data))
  .catch((err) => console.log(err));

console.log(2);
  


//What have async and await acheived for us is it bundeled up all of our asynchronous code into a single function which we can call and use whenever we want and secondly it is asynchrounous means it's not gonna block our rest of the code in our application.
//Whenever we throw an error in asynchronous function it indicates that the promise is rejected. So we can catch that error and display.