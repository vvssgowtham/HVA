const path = require("path");

//basename method is used to extract last part of the path
//dirname method returns the directories of a path
//extname method returns file extension of a path

const basename = path.basename("HVA/Backend/PathModule/message.txt");
console.log(basename);
const dirname = path.dirname("HVA/Backend/PathModule/message.txt");
console.log(dirname);
const extension = path.extname("HVA/Backend/PathModule/message.txt");
console.log(extension);

//joins the current directory with public and index.html to form a complete path
//__dirname will give the current directory
const fullPath = path.join(__dirname, "public", "index.html");
console.log(fullPath);
