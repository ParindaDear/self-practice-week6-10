/*เขียน HTML ใหม่ละ  โจทย์ให้เราเขียน js เพื่อเข้าถึง DOM เเล้วไป
เพิ่ม element p เข้าไปให้หน่อย*/
// const divElement = document.getElementById("subject")
// const pElement = document.createElement("p")
// divElement.appendChild(pElement)

/*โจทย์เดิมแต่ให้เพิ่ม attribute เข้าไปแบบนี้ <p id = 'int141'> บลาๆ ตามเดิม</p>*/
const divElement = document.getElementById("subject") //create <p> element
const pElement = document.createElement("p")

// ทำแบบนี้วิธีเพิ่ม attribute 
pElement.setAttribute("id", "int141")

//Create text node then append to <p> child
pElement.textContent = "INT141"

divElement.appendChild(pElement) //append <p> with text node to div element

