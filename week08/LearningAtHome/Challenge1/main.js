/*โจทย์
สมมติว่าเรามีกล่องสี่เหลี่ยมอยู่ 1 อัน และมีปุ่ม 3 ปุ่มสำหรับเปลี่ยนรูปแบบของกล่อง
เมื่อกดปุ่ม ทำให้มุมโค้ง → เพิ่มคลาส "rounded" ให้กับกล่อง (ถ้ามีอยู่แล้วกดอีกทีให้เอาออก → ใช้ toggle)
เมื่อกดปุ่ม เพิ่มเงา → เพิ่มคลาส "shadow" ให้กับกล่อง (ใช้ toggle)
เมื่อกดปุ่ม ทำให้เด่น → เพิ่มคลาส "highlight" ให้กับกล่อง (ใช้ toggle) */

const box = document.getElementById("box")

const roundedBtn = document.getElementById("roundedBtn")
const shadowBtn = document.getElementById("shadowBtn")
const highlightBtn = document.getElementById("highlightBtn")

roundedBtn.addEventListener("click", () => {
  box.classList.toggle("rounded")
})

shadowBtn.addEventListener("click", () => {
  box.classList.toggle("shadow")
})

highlightBtn.addEventListener("click", () => {
  box.classList.toggle("highlight")  
})
