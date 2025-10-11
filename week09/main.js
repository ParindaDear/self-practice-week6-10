/*1.ใช้ input event ให้แสดงข้อความ ทันที ทุกครั้งที่ผู้ใช้พิมพ์
ข้อความใน <p> ต้อง อัปเดตแบบเรียลไทม์ ตามค่าใน input */
// const message = document.querySelector('#message') 
// const display = document.querySelector('p') 
// message.addEventListener('input', function () {
//     display.textContent = message.value
// })

// /*2. ใช้ change event
// ให้แสดงข้อความที่หน้าจอ หลังจากผู้ใช้แก้ไขเสร็จแล้วและออกจาก input (blur)
// ข้อความใน <p> จะอัปเดต ครั้งเดียวหลังแก้ไขเสร็จ */
// const message = document.querySelector('#message') 
// const display = document.querySelector('p') 
// message.addEventListener('change', function () {
//  display.textContent = message.value
//  })


/*ให้เห็นภาพสังเกตความแตกต่าง
เพิ่ม console.log("input handler function is working...") ใน event handler ของ input
ให้นักศึกษาเปรียบเทียบ จำนวนครั้งที่ handler ถูกเรียก ระหว่าง input และ change*/
const message = document.querySelector('#message') 
const display = document.querySelector('p') 
message.addEventListener('input', function () {
    console.log("input handler function is working...")
    display.textContent = message.value
 })