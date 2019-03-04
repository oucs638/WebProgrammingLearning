"use strict";

//let buf = new Buffer("This is my pretty example");
let str = "This is my pretty exsmple";
let buf = Buffer.alloc(str.length).fill(str);
let json = JSON.stringify(buf);
//let buf1 = new Buffer(JSON.parse(json).data);
let buf1 = Buffer.from(JSON.parse(json).data);

console.log(str);
console.log(buf);
console.log(json);
//console.log(JSON.parse(json).data);
console.log(buf1.toString("ascii"));
