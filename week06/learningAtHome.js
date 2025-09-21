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
console.log("====================")

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
console.log("====================")

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
console.log("====================")

/*Write a function loginSystem(correctPassword, maxAttempts) that:
1. Accepts a string correctPassword and a number maxAttempts.
2. Returns a function that accepts a string tryPassword.
3. If tryPassword matches correctPassword, return "Access granted".
4. If it doesn’t match, decrease the number of attempts left and return "Access denied. X attempts left".
5. If the number of failed attempts reaches maxAttempts, return "Account locked" and ignore further tries.
Example Usage
const login = loginSystem("secret123", 3)
console.log(login("wrong"))     // Access denied. 2 attempts left
console.log(login("nope"))      // Access denied. 1 attempts left
console.log(login("guess"))     // Account locked
console.log(login("secret123")) // Account locked*/
function loginSystem(correctPassword, maxAttempts) {
  let attemptsLeft = maxAttempts
  let locked = false

  return function(tryPassword) {
    if (locked) {
      return "Account locked"
    }

    if (tryPassword === correctPassword) {
      return "Access granted"
    } else {
      attemptsLeft--
      if (attemptsLeft <= 0) {
        locked = true
        return "Account locked"
      }
      return `Access denied. ${attemptsLeft} attempts left`
    }
  }
}
const login = loginSystem("secret123", 3)
console.log(login("wrong"))     // Access denied. 2 attempts left
console.log(login("nope"))      // Access denied. 1 attempts left
console.log(login("guess"))     // Account locked
console.log(login("secret123")) // Account locked
console.log("====================")

/*Write a function bankAccount(initialBalance) that:
1. Accepts a starting balance initialBalance.
2. Returns an object with these methods:
  deposit(amount) → เพิ่มเงินในบัญชี
  withdraw(amount) → ถอนเงิน ถ้าเงินไม่พอให้ return "Insufficient funds"
  getBalance() → แสดงยอดเงินปัจจุบัน
  getHistory() → แสดงรายการธุรกรรมทั้งหมดในรูปแบบ array (เช่น ["Deposit 100", "Withdraw 50"])
Balance และ history ต้องถูกเก็บไว้ใน closure และไม่สามารถแก้ไขได้โดยตรงจากภายนอก 
Example Usage
const account = bankAccount(200)

console.log(account.deposit(100))   // Deposited 100. Balance: 300
console.log(account.withdraw(50))   // Withdrew 50. Balance: 250
console.log(account.withdraw(500))  // Insufficient funds
console.log(account.getBalance())   // 250
console.log(account.getHistory())   // ["Deposit 100", "Withdraw 50", "Failed withdraw 500"] */
function bankAccount(initialBalance) {
  let balance = initialBalance
  let history = []

  return {
    deposit: function(amount) {
      balance += amount
      history.push(`Deposit ${amount}`)
      return `Deposited ${amount}. Balance: ${balance}`
    },
    withdraw: function(amount) {
      if (amount > balance) {
        history.push(`Failed withdraw ${amount}`)
        return "Insufficient funds"
      }
      balance -= amount
      history.push(`Withdraw ${amount}`)
      return `Withdrew ${amount}. Balance: ${balance}`
    },
    getBalance: function() {
      return balance
    },
    getHistory: function() {
      return history
    }
  }
}

const account = bankAccount(200)
console.log(account.deposit(100))   // Deposited 100. Balance: 300
console.log(account.withdraw(50))   // Withdrew 50. Balance: 250
console.log(account.withdraw(500))  // Insufficient funds
console.log(account.getBalance())   // 250
console.log(account.getHistory())   // ["Deposit 100", "Withdraw 50", "Failed withdraw 500"]
console.log("====================")