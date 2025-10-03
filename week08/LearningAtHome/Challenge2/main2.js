/*จากไฟล์ HTML ที่กำหนดให้
ปุ่ม เล็ก → เปลี่ยนขนาดกล่องเป็น 100x100
ปุ่ม กลาง → เปลี่ยนขนาดกล่องเป็น 200x200
ปุ่ม ใหญ่ → เปลี่ยนขนาดกล่องเป็น 300x300
เขียน JavaScript เพื่ออ่านค่า data-size ของปุ่ม และเปลี่ยน style.width + style.height ของกล่อง */
const box = document.getElementById("box")
const buttons = document.querySelectorAll("[data-size]")

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const size = e.target.dataset.size  

    if (size === "small") {
      box.style.width = "100px"
      box.style.height = "100px"
    } else if (size === "medium") {
      box.style.width = "200px"
      box.style.height = "200px"
    } else if (size === "large") {
      box.style.width = "300px"
      box.style.height = "300px"
    }

    box.textContent = size.toUpperCase()
  })
})
