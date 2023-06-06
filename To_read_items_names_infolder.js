//here folder name is given manually you can take its name through cmd
const fs=require("fs")
fs.readdir(__dirname+"/"+"folder1",(err,items)=>{
  console.log(items)
})

//you cannot read data outside this folder where your project is stored