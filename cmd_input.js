// list1=process.argv
// console.log(list1)

//Taking input your name
// list1=process.argv
// console.log(list1[2])

//Input a File name and make the file take content also
const fs=require('fs')
list1=process.argv
file_name=list1[2]
content=list1[3]
fs.writeFileSync(file_name,content)
