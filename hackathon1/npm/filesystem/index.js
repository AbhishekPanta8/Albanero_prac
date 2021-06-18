const fs = require("fs");
// fs.mkdir("abhi",(err)=>{
//   console.log("folder is creatd");
// });
// fs.writeFile("abhi/bio.txt","Hello it's me Abhishek Panta",(err)=>{
//   console.log("file is created inside the folder.");
// });
// fs.appendFile("abhi/bio.txt","this is the appended part!",(err)=>{
//   console.log("append success");
// });
fs.readFile("abhi/bio.txt","utf-8",(err,data)=>{
  console.log(`file is read and the content`);
})

// fs.rename("abhi/bio.txt","abhi/mybio.txt",(err)=>{
//   console.log("file renamed!");
// });
// fs.unlink("abhi/mybio.txt",(err)=>{
//   console.log("file is now deleted!");
// });
// fs.rmdir("abhi",(err)=>{
//   console.log("folder deletion succesfull");
// });