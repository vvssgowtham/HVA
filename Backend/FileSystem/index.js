const fs = require("fs");

// fs.writeFile("message.text","Hello Welcome!!!",(err,data)=>{
//     if(err) console.log(err);
//     else console.log("Write Successful");
// })

// fs.readFile("message.text", "utf8", (err, data) => {
//     if (err) console.log(err);
//     else console.log("Read Data:", data);
// });

// fs.appendFile("message.text","to NodeJS",(err,data)=>{
//     if(err) console.log(err);
//     else console.log("append Successful");
// })

fs.unlink("message.text",(err)=>{
    if(err) console.log("Error Deleting File");
    else console.log("Deletion Successful");
})