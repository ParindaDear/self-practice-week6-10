/*ทำความเข้าใจบางเรื่องเพิ่มเติมที่ยังไม่แม่น(ที่บ้าน) */
/* Nested Functionn */
function x() {                 // ชั้นที่ 1
    function y() {}            // ชั้นที่ 2 (อยู่ใน x)
    const z = () => {          // ชั้นที่ 2 (อยู่ใน x)
        const m = () => {      // ชั้นที่ 3 (อยู่ใน z)
            function n() {}    // ชั้นที่ 4 (อยู่ใน m)
        }
    }
}
/*Function Scope */
//ทฤษฎีข้อ 1
/*function getScore(x) {
    let mid = 40
    let final = 30
    return mid + final + x
}
const score = getScore(1)
console.log(score) //71
console.log(x, mid, final) //error ตามทฤษฎีข้อ1 ตัวแปรที่ประกาศใน func จะไม่สามารถเข้าถึงจากนอก func ได้ */

//ทฤษฎีข้อ 3 
// let y = 100 //global variable
// const sum = 5 //global variable
// function getScore(x) { //global function
//     let mid = 40      
//     let final = 30
//     return mid + final + x + y + sum
// }
// const score = getScore(1)
// console.log(score) //176


// let y = 100 //global variable
// const sum = 5 //global variable
// function getScore(x) { //global function
//     let y = 10 //local variable รักแท้เเพ้ระยะทาง ถ้า same กันมันจะเอาตัว local มาคิด
//     let mid = 40      
//     let final = 30
//     return mid + final + x + y + sum
// }
// const score = getScore(1)
// console.log(score) //86

// let y = 100 //global variable
// let sum = 5 //global variable
// sum = 2 //ใกล้กว่าก็เอาอันนี้มา (รักแท้เเพ้ระยะทาง)
// function getScore(x) { //global function
//     let y = 10 
//     let mid = 40      
//     let final = 30
//     function doSomething() {
//         //คำถามคือมันจะอ้างถึงตัวแปรไหนได้บ้างใน func doSomething นี้
//         //ตำตอบคือ y(global), sum(global), x(local (parameter)), mid(local), final(local)
//         return `doSomething: ${y + sum + x + mid + final}`
//     }
//     return doSomething()  //ต้องเขียน return แบบนี้เป็นการเอาผลของ function  ปล.ต้องเรียก getScore เหมือนกัน 
//                           //****สรุป outer func เรียก nested func ให้ทำงานได้***
// }
// const score = getScore(1)
// console.log(score) // doSomething: 83
// //console.log(doSomething()) เรียกแบบนี้ไม่ได้ จะ error ****เพราะตามหลักการเเล้วเราจะเรียกได้เเค่ outer function****


/*Closure */
const z = 1 
function makeAdder(x) {
    console.log(x) //10
    console.log(z) //1
    return function doSomething(y) {
        return x + y + z
    }
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
console.log(add5(3))  //9 เพราะ 3+5+1    
console.log(add10(3)) //14 เพราะ 3+10+1
