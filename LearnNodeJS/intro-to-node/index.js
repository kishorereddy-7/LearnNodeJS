// manpulating the files in the system

// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt")

// using superheroes package
var superheroes = require("superheroes")
var mysuperhero = superheroes.random()
console.log(mysuperhero)

var supervillains = require("supervillains")
var mysupervillan = supervillains.random()
console.log(mysupervillan)