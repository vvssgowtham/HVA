const fs = require("fs").promises;

//Using Callbacks
console.log("Callbacks...");
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) console.log("Error:", err.message);
  else console.log(data);
});

//Using Promises
console.log("Promise...");
const getData = () => {
  return fs.readFile("data.txt", "utf-8");
};

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });

//Using Async and Await
console.log("async&await...");
const asyncAwait = async () => {
  try {
    const data = await fs.readFile("data.txt", "utf-8");
    return data;
  } catch (err) {
    throw new Error("Issue in reading file...");
  }
};

asyncAwait()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
