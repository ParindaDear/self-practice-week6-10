// เรื่อง session storage 
// let like = sessionStorage.getItem("like") //เป็นการ ดึงค่าจาก sessionStorage ที่มีชื่อคีย์ว่า "like" มาเก็บไว้ในตัวแปร like
// if (like === null) {
//     like = 0
// }
// like++
// sessionStorage.setItem("like", like) //บันทึกค่าล่าสุด
// alert(like) //แสดงจำนวนครั้งที่ like

//เรื่อง localStorage
let like = localStorage.getItem("like")
if(like === null) localStorage.setItem("like", 1) // ถ้า localStorage ยังไม่มีค่า "like" อยู่ ให้สร้าง "like" และเริ่มนับจาก 1
else localStorage.setItem("like", ++like)
alert(localStorage.getItem("like"))