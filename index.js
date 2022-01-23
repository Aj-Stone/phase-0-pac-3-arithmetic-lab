function add(x,y){
    return x+y
}
console.log (add(1,80));

function subtract(x,y){
    return x-y
}
console.log (subtract(60,40));

function multiply(x,y){
    return x*y
}
console.log(multiply(2,3.4))

function divide(x,y){
    return x/y
}
console.log(divide(5,2.5))

let number = 1;
function increment(number){
    return number += 1
}
function decrement(number){
    return number -=1
}

function makeInt(n, radix=10){
    return(parseInt(n,radix))
}
console.log (makeInt("2",))

function preserveDecimal(string){
    return parseFloat(string)
}
console.log (preserveDecimal("3.443544"))