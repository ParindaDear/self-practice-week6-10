/*First-Class and Higher-Order Functions */
/*จารย์อยากให้ greet มี formatter ที่เเตกต่างจากอันนี้ 
จุดประสงค์ จารย์อยากให้เห็นว่า greet เป็น higher-order function ที่รับ formatter ใดๆ*/
const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'
console.log(greet('Alice', shout)) // ALICE!!!

const hello = text => "Hello, " + text
console.log(greet('Jasper', hello))


/*ตัวอย่างจากอ. 
1. เขียนฟังก์ชันชื่อ calculate(nums, compute)
  ฟังก์ชันนี้จะรับ อาร์เรย์ของตัวเลข (nums) และ ฟังก์ชัน (compute) ที่จะใช้คำนวณ
  จากนั้นให้คืนค่าผลลัพธ์ที่ได้จากการเรียก compute(nums)
2. เขียนฟังก์ชันที่ใช้กับ calculate ได้ 4 ฟังก์ชัน ได้แก่
  sum(elements) → คืนค่าผลรวมของทุกตัวในอาร์เรย์
  max(elements) → คืนค่าตัวเลขที่มากที่สุดในอาร์เรย์
  min(elements) → คืนค่าตัวเลขที่น้อยที่สุดในอาร์เรย์
  sort(elements) → คืนค่าอาร์เรย์ที่เรียงจากน้อยไปมาก

ทดสอบฟังก์ชันทั้งหมดด้วยตัวอย่างต่อไปนี้
console.log(calculate([1, 3, 5, 7], sum))      // 16
console.log(calculate([100, 3, 5, 7], max))    // 100
console.log(calculate([10, 2, 0, 7], min))     // 0
console.log(calculate([10, 2, 0, 7], sort))    // [0, 2, 7, 10]  */
function calculate(nums, compute) {//higher order function
    return compute(nums)
}
function sum(elements) { //higher order function เพราะ reduce
    return elements.reduce((total, current) => total + current)
}
function max(elements) {
    return Math.max(...elements)
}
function min(elements) {
    return Math.min(...elements)
}
function sort(elements) { //higher order function เพราะ sort
    return elements.sort((a,b) => a-b)
}
console.log(calculate([1, 3, 5, 7], sum)) //16
console.log(calculate([100, 3, 5, 7], max)) //100
console.log(calculate([10, 2, 0, 7], min)) //0
console.log(calculate([10, 2, 0, 7], sort)) //[ 0, 2, 7, 10 ]

/*คำถาม โค้ดที่เขียนไปนี้มี Higher-order function กี่ตัว อะไรบ้าง
ANS 3 ตัวคือ calculate, sum(เพราะ reduce), sort(เพราะ sort)*/

/*Function type */
// function a() {}          // ชั้นที่ 1 (global)
// function b() {}          // ชั้นที่ 1 (global)
// function x() {           // ชั้นที่ 1 (global)
//     function y() {       // ชั้นที่ 2 (อยู่ใน x)
//         function z() {}  // ชั้นที่ 3 (อยู่ใน y)
//     }
//     function m() {}      // ชั้นที่ 2 (อยู่ใน x)
//     function n() {}      // ชั้นที่ 2 (อยู่ใน x)
// }
/*สรุป:
a, b, x → ชั้นที่ 1
y, m, n → ชั้นที่ 2
z → ชั้นที่ 3
ดังนั้น nested ลึกสุด = 3 ชั้น  */

//ออกสอบ
// function a(){ //higher order function 
//     return sum //มันไม่ได้เรียก func sum ให้ทำงาน  มันคืน "ฟังก์ชัน sum" (ยังไม่ได้เรียกใช้)
// }
// function b() { //ไม่ใช่ higher order func เพราะมันไม่ได้ return func  
//     return sum(1, 5) //ซึ่ง func b มันเรียก func sum ให้ทำงาน   มันเรียก sum ให้ทำงานแล้วได้ค่าออกมา (เป็น number)
// }
// function c(x) { //higher order function เพราะรับ func เป็น parameter ได้
//     return x
// }
// function sum(n1, n2){
//     return n1 + n2
// }
// console.log(typeof a()) //function
// console.log(typeof b()) //number
// console.log(typeof c(sum)) //function 



/* จงหาวิธีเรียก echo
let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b)
  }
  return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`) */

// let a = 1 //global scope
// function doSomething(x) {
//   let a = 10 //local scope
//   let greet = "Hello"
//   function echo() {
//     let a = 555
//     let b = "Bob"
//     console.log(a, b)
//   }
//   echo()
//   return `${greet}, ${x}, a=${a}`
// }
// console.log(doSomething("guest"))
// a = 100
// console.log(`a= ${a}`)


/*ต้องทำไงให้ echo ทำงาน 
function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo()
}
doSomething("guest")*/
function doSomething(x) { //higher order function
  function echo() {
    return `hello,${x}`
  }
  return echo
}
const fn = doSomething("guest")
console.log(fn()) //hello,guest


function makeAdder(x, y) {
    function add(y) {
        return x + y
    }
    return add 
}
const add5 = makeAdder(5)
console.log(add5(3)) //8



function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1


/* Practice-G1
Design a function idGenerator that generates unique IDs automatically. 
Each time the function is called, it should return the next ID number, starting from 1 and increasing by 1.
Sample Output:
const idGen = idGenerator()
console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3 */
function idGenerator(){ //เป็น closure function
    let id = 0
    return function(){ //เพราะว่าการเป็น closure function ต้อง return function อื่นไง
        id++
        return id // เพิ่มทีละ 1 ทุกครั้งที่ถูกเรียก
    }
}
const idGen = idGenerator()
console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3

/*อธิบาย มีตัวแปร id อยู่ใน scope ของ idGenerator
แต่เรา return ฟังก์ชันนิรนาม ออกมา ซึ่งยังอ้างถึง id อยู่
ทำให้แม้ว่า idGenerator จะทำงานเสร็จแล้ว ตัวแปร id ก็ยังไม่หายไป เพราะ ถูกเก็บไว้ใน closure 

ตอนเรียก idGenerator() ครั้งแรก → ได้ฟังก์ชัน idGen ที่ยังจำค่า id=0 ไว้
ทุกครั้งที่เรียก idGen() → id จะถูกเพิ่มขึ้นทีละ 1
เลยได้ผลลัพธ์ 1, 2, 3 ตามลำดับ*/


/*Practice-G2
Write a function outerFunction(a) that contains a nested function innerFunction(b). 
The outerFunction should return the result of a + b by calling innerFunction.
Sample Output:
const addFive = outerFunction(5)
console.log(addFive(3)) // 8
const addTen = outerFunction(10)
console.log(addTen(2)) // 12 */
function outerFunction(a) {
    function innerFunction(b) {
        return a + b
    }
    return innerFunction
}
const addFive = outerFunction(5)
console.log(addFive(3)) 
const addTen = outerFunction(10)
console.log(addTen(2)) 
