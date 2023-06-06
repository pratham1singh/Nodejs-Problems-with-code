const fs=require("fs")
list1=process.argv
if(list1[2]=="create"){
    fs.writeFileSync(list1[3],list1[4])
}
else if(list1[2]=="delete"){
    fs.unlinkSync(list1[3])
}
else if(list1[2]=="append"){
    fs.appendFileSync(list1[3],list1[4])
}
//Input example :- node CRUD_cmd create practice.txt "hello this is example"