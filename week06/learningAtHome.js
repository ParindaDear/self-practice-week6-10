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

/*Write a function createCounter(start) that:
Starts counting from the given start value.
Returns an object with three methods:
increment() → increases the counter by 1
decrement() → decreases the counter by 1
getValue() → returns the current counter value
You must use closure to store the counter value privately (not accessible directly). 
Expected Output:
const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.increment()) // 7
console.log(counter.decrement()) // 6
console.log(counter.getValue())  // 6  */
function createCounter(start) {
  let count = start   // ตัวแปรนี้ถูกเก็บใน closure

  return {
    increment: function() {
      count++
      return count
    },
    decrement: function() {
      count--
      return count
    },
    getValue: function() {
      return count
    }
  }
}

const counter = createCounter(5)
console.log(counter.increment()) 
console.log(counter.increment()) 
console.log(counter.decrement()) 
console.log(counter.getValue()) 

/*Write a function secretMessage(password) that:
1. Accepts a string password.
2. Returns a function that accepts another string tryPassword.
3. If tryPassword matches the original password, return "Access granted".
4. Otherwise, return "Access denied".
Example Output 
const check = secretMessage("opensesame")
console.log(check("wrongpass"))   // Access denied
console.log(check("opensesame"))  // Access granted */
function secretMessage(password) {
  return function(tryPassword) {
    if (tryPassword === password) {
      return "Access granted"
    } else {
      return "Access denied"
    }
  }
}
const check = secretMessage("opensesame")
console.log(check("wrongpass"))  
console.log(check("opensesame")) 
