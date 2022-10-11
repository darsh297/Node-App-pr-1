// var a = require("./cal");
// var f = require("fs")
// console.log(a.ADD(5,6));
// console.log(a.SUB(8,3));
// console.log(a.MUL(4,7));
// console.log(a.DIV(8,2));
// console.log(a.mn);

var fs = require("fs")
const {add, sub,mult,div} = require('./cal')


const file1 = fs.readFileSync('input.txt', 'utf8')

const arr = [];
file1.split(/\r?\n/).forEach(line => {
    arr.push(line)
});

for(let i = 0; i < arr.length/3; i++){
    let a = arr[i*3 + 0];
    let b = arr[i*3 + 1];
    let c = arr[i*3 + 2];
    a = parseInt(a);
    b = parseInt(b);
    if(c === "ADD"){
    // console.log(add(a, b))
    // console.log(toString(a + b))
    
    let d = add(a, b)
     // console.log(d.toString())
    fs.appendFileSync('output.txt', d.toString()+ "\n")
    } else if( c === "SUB") {
    // console.log(toString(a - b))
        let d = sub(a,b)
        fs.appendFileSync('output.txt', d.toString() + "\n")
    }else if( c === "MUL") {
        // console.log(toString(a * b))
            let d = mult(a,b)
            fs.appendFileSync('output.txt', d.toString() + "\n")
    }else if( c === "DIV") {
        // console.log(toString(a / b))
            let d = div(a,b)
            fs.appendFileSync('output.txt', d.toString() + "\n")
    }
}
console.log("file read")



