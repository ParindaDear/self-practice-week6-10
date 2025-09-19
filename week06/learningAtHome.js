/*Problem 1: Greeting Formatter (HOF)
Write a function greet(name, formatter) 
that accepts a name and a formatter function.
The function should return the formatted greeting. */
function greet(name, formatter){
    return formatter(name)
}
function hi(n){
    return "Hi, " + n
}
console.log(greet("Bella", hi))
console.log("====================")

/* Write code that declares x = 1 globally, 
then inside a function outer() redeclares x = 5, 
and inside another nested function inner() redeclares x = 10.
Print the value of x inside inner, then inside outer, and finally in the global scope.          // 8
Expected Output:
10
5
1 */
let x = 1
function outer(){
    let x = 5
    function inner(){
        let x = 10
        console.log(x)
    }
    inner()
    console.log(x)
}
outer()
console.log(x)
