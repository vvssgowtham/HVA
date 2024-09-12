import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.post("/user",(req,res)=>{
     const {name,email} = req.body;
     console.log(`Name : ${name} Email : ${email}`);
     return res.status(200).json({message : "Data Obtained successfully..."});
})

app.listen(3000, console.log("Listening on port 3000"));
