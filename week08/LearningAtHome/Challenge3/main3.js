/*ให้แสดงค่าตัวเลขเริ่มต้นเป็น 0
ปุ่ม เพิ่ม → บวกค่า counter ทีละ 1
ปุ่ม ลด → ลบค่า counter ทีละ 1 (แต่ไม่ต่ำกว่า 0)
ปุ่ม รีเซ็ต → รีเซ็ตค่า counter กลับไปเป็น 0 */
const counterEl = document.getElementById("counter")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")

let count = 0

function updateCounter() {
  counterEl.textContent = count
}

increaseBtn.addEventListener("click", () => {
  count++
  updateCounter()
})

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--
    updateCounter()
  }
})

resetBtn.addEventListener("click", () => {
  count = 0
  updateCounter()
})
