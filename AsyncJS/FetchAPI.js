//fetch api

//This thing right here acts as promise so this either resolves or rejects
fetch("https://jsonplaceholder.typicode.com/todos/7")
  .then((response) => {
    //here response is an object

    //This response usually contains lots of data which is mostly not required only the original data which is in json() is required. SO we simply get the data via .json()
    //response.json() is again is an object
    return response.json(); //This is returning a promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    //here err is an object
    console.log(err);
  });