var a = 36;
console.log(a)
var a = 32;
console.warn(a)


let b = 32;
// let b = 33 -- this shows error(as in js var can be use to reassign the values but let cannot)
console.log(b)

const c = 22
console.log(c)

var num1 = 34;
var num2 = 36;

function add(){
    var sum = num1+num2
    console.log(`Sum of ${num1} + ${num2} = ${sum}`)
}

add()

function Multiplication(a,b){
    return a*b
}

console.log(Multiplication(10,2))