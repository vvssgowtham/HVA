const getSomething = () => {
  //promise means to do so it gonna 2 outcomes no matter what!!! we get the data we want resolve or we get error that is reject
  //In a promise we automatically get access to 2 parameters i.e resolve and reject in promises which are inbuilt in javascript
  return new Promise((resolve, reject) => {
    //fetch something
    //If fetch is successfull and data is returned then resolve is done as resolve(data); but if there is an error then reject(error);

    resolve("Some data");
    //reject("Some error")
  });
};

//when we get promise from function like below then we can use .then() and .catch()
//a promise is basically saying if u pass a function inside .then(()=>{}) then I will fire that function when we resolve that promise.
//In simple words when we resolve something in a promise it fires the callback() inside the then() method and that callback function takes the data that we pass through the resolve function. Similarly for reject second callback function will be called.

// Method -1

// getSomething().then((data)=>{
//     console.log(data);
// },(err) => {
//     console.log(err);
// })

// Method - 2
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
