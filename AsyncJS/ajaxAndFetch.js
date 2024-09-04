const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //console.log(request,request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        //Converting response i.e json string to javascript object
        const data = JSON.parse(request.responseText);
        //Now data is array of js objects
        callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  //ready state 1
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  //ready state 2 sending the request
  request.send();
  //ready state 3 means loading
  //ready state 4 means completed
};

console.log(1);
console.log(1);


getTodos((err,data)=>{
    console.log("Callback Fired");
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log(1);
console.log(1);

//Entire process of execution is first all 4 console statements will be printed and then the call back will be fired once the network requests(GET) has been completed.