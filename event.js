const EventEmitter =require("events")
class MyEmitter extends EventEmitter{}

const event1 = new MyEmitter();
event1.on("waterfull",()=>{
    console.log("hello")
})
event1.emit("waterfull")