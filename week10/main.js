// //session storage
// // let like = sessionStorage.getItem("like")
// // if(sessionStorage.getItem('like')===null)
// //     sessionStorage.setItem("like", like)
// // else sessionStorage.setItem("like", ++like)
// // alert(sessionStorage.getItem("like"))

// //localStorage
// let like = localStorage.getItem("like")
// if(like === null) localStorage.setItem("like", 1)
// else localStorage.setItem("like", ++like)
// alert(localStorage.getItem("like"))

// import { CookieUtil } from "./myLib/CookieUtil.js"
// CookieUtil.set("cartId", "abc123", "max-age=60")
//document.cookie = 'username=parinda; max-age=60'
console.log(document.cookie)
// console.log(document.cookie)
// console.log(CookieUtil.get("cartId"))
// CookieUtil.unset("cartId")
// console.log(document.coookie)
//document.cookie = 'theme=dark'  //จะเห็นว่า Expries default จะเป็น session
// document.cookie = 'theme=light'  //ถ้าเพิ่ม cookie เดิมเข้าไปจะเป็นการ replace value
// document.cookie = 'username=parinda' //เป็นการสร้าง cookie เพิ่ม
//ลอง comment 3 บรรทัดบนนี้ เเล้ว refresh จะเห็นว่ามันอยู่ เเต่ถ้าปิด browser มันจะหาย 
// document.cookie = `the=light;expires=expires=${new Date(2025, 9, 16)}`  //พอจะกำหนดค่่าเพิ่มอย่าง expire date ต้องใช้ backtip
// document.cookie = "username=umaporn;max-age=60" //สร้างให้มันหมดอายุเร็วๆได้โดยใช้ max-age โดยกำหนดเป็น 60 คือ 60 วิ

