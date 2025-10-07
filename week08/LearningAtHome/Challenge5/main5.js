/*โจทย์:
สร้างระบบ “รายการของที่ต้องซื้อ” ที่สามารถ เพิ่มชื่อสินค้า ลบสินค้าเฉพาะรายการ บันทึกสินค้าทั้งหมดไว้ใน localStorage (รีเฟรชแล้วยังอยู่) 
เขียน JavaScript เพื่อ:
1.เพิ่มสินค้าใหม่จากช่อง input ลงใน <ul>
2.สินค้าแต่ละรายการมีปุ่ม “ลบ” อยู่ข้างหลัง
3.เมื่อกด “ลบ” ให้ลบ <li> นั้นออก
4.ทุกครั้งที่เพิ่มหรือลบ ให้บันทึกรายการทั้งหมดใน localStorage
5.เมื่อรีเฟรชหน้าเว็บ ให้โหลดรายการเก่าจาก localStorage มาขึ้นใหม่ */
const input = document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("itemList")

// (ยากๆๆ)โหลดข้อมูลจาก localStorage (แปลงกลับจาก JSON)
let items = JSON.parse(localStorage.getItem("items")) || []

function renderList() {
  list.innerHTML = ""
  items.forEach((item, index) => {
    const li = document.createElement("li")
    li.textContent = item

    const delBtn = document.createElement("button")
    delBtn.textContent = "ลบ"
    delBtn.addEventListener("click", () => {
      items.splice(index, 1)
      saveAndRender()
    })

    li.appendChild(delBtn)
    list.appendChild(li)
  })
}

function saveAndRender() {
  localStorage.setItem("items", JSON.stringify(items))
  renderList()
}

addBtn.addEventListener("click", () => {
  const value = input.value.trim()
  if (value !== "") {
    items.push(value)
    input.value = ""
    saveAndRender()
  }
})

renderList()
