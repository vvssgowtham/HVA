import axios from "axios";
import fs from "fs";

const buttonClick = async () => {
  try {
    const response = await axios({
      url: "https://jsonplaceholder.typicode.com/todos/9",
      method: "GET",
      responseType: "json",
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

buttonClick();

const getImages = async () => {
  try {
    const anotherResponse = await axios({
      url: "https://bit.ly/2mTM3nY",
      method: "GET",
      responseType: "stream",
    });

    // response.data is the readable stream for the image data from the server.
    anotherResponse.data.pipe(fs.WriteStream("Google.jpg"));
  } catch (error) {
    console.log(error);
  }
};

getImages();

const sendData = async () => {
  try {
    const finalResponse = await axios({
      url: "http://localhost:3000/user",
      method: "POST",
      data:{
          "name":"Gowtham",
          "email":"gowthamvvss@gmail.com"
      },
      responseType: "json"
    });
    console.log(finalResponse.data);
  } catch (error) {
     console.log(error);
  }
};

sendData();