const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //console.log(request,request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //Converting response i.e json string to javascript object
        const data = JSON.parse(request.responseText);
        //Now data is array of js objects

        resolve(data);
      } else if (request.readyState === 4) {
        reject("Error getting resource");
      }
    });

    //ready state 1
    request.open("GET", resource);
    //ready state 2 sending the request
    request.send();
    //ready state 3 means loading
    //ready state 4 means completed
  });
};

getTodos("https://jsonplaceholder.typicode.com/todos/2")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

//However this may not work now because XMLHttpRequest() clearly
