//โจทย์มีเเค่ว่าต้องการสร้าง <p id='p5'>#5</p> แทรกตรงตามตำแหน่งที่บอกใน html
const pElement = document.createElement('p') //สร้าง <p></p>
pElement.setAttribute("id", "p5") //ใส่ attribute id='p5' ใน tag p
pElement.textContent = "#5" //ใส่ text content ให้ p

const body = document.body // เตรียมที่ที่จะยัดใส่
body.appendChild(pElement) // ยัดมันใส่ไปใน body


// //โจทย์เดิมเเต่เขียนทุกอย่างเต็มยศ 
// const pElement = document.createElement('p')
// const idAttr = document.createAttribute('id')
// idAttr.value = 'p5'
// pElement.setAttributeNode(idAttr)

// const pText = document.createTextNode('#5')
// pElement.appendChild(pText)

// const body = document.body
// body.appendChild(pElement)