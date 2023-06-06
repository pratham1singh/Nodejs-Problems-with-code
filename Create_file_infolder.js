const { dir } = require("console")
const fs=require("fs")
const path=require("path")


let folder_name=process.argv[2]
let file_name=process.argv[3]
const dirname=path.join(__dirname,folder_name)

fs.writeFileSync(dirname+'/'+file_name,"hello is one is new")