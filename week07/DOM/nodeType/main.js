// //การอ้างถึง root node ทำได้ 2 วิธี
// console.log(window.document) 
// console.log(document) 
// console.log(typeof document) //จะออกมาเป็น object โดยมันจะเก็บ reference

// console.log(document.getElementById('123')) //เป็นวิธีการ query ผ่าน id โดยมันจะไปหา node ที่มีค่า id ตรงกับที่เราระบุ 

// const htmlElement = document.documentElement   //(ต่อ) โดยคำตอบจะมีเเค่ 2 แบบคือ เจอ กับ null
// console.log(htmlElement)

// console.log(htmlElement.parentElement) //null
// console.log(htmlElement.parentNode) // root node 
// if(htmlElement.parentNode === document) {
//     console.log("parent of html is a root node") // คำตอบคือ มันจะเป็นจริง 
// }

// console.log(document.firstChild) //firstChild คือลูกคนเเรกของ root node ในตัวอย่างนี้คือ DOCTYPE
// console.log(document.firstChild.nextSibling)
// console.log(document.firstChild.previousSibling) // null เพราะไม่มี
// console.log(document.firstElementChild) //firstElementChild คือลูกที่เป็น element type ตัวแรก ในตัวอย่างนี้คือ html
// console.log(document.firstElementChild.previousElementSibling) //<!--sample comment #1-->
// console.log(document.lastChild)
// console.log(document.lastElementChild)

// // 1. จารย์ต้องการให้เรา get all child node under <div id = '123'>
// const divElement = document.getElementById('123')
// // 2. get all node types children (return (static) NodeList, can use forEach)
// const divChildNodes = divElement.childNodes //get all node types children (NodeList, can use forEach)
// console.log(divChildNodes.length) //3 
// divChildNodes.forEach((child) => console.log(child))
// // 3. get only Element node type children (return (dynamic) HTMLCollention, can not use forEach)
// const divChildren = divElement.children
// console.log(divChildren.length) //2 
// // for (let i = 0; i < divChildren.length; i++){
// //     console.log(divChildren[i])
// // }
// Array.from(divChildren).forEach((child) => console.log(child))

// const divElement = document.getElementById("123")
// //1. get all attributes on <div id='123'>
// const divAttrs = divElement.attributes
// console.log(divAttrs.length) //2

// for (let i = 0; i < divAttrs.length; i++) {
//   const attrName = divAttrs[i].name //get attribute name
//   const attrValue = divAttrs[i].value //get attribute value
//   console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)
//   console.log(divAttrs[i].ownerElement)
// }
// console.log(divElement.getAttribute("id")) //find attribute value
// console.log(divElement.getAttribute("style")) //find attribute value

// //โจทย์
// // 1. What is the node type of first child of root node 
// console.log(document.firstChild.nodeType) //10 เพราะเป็น DOCUMENT_TYPE_NODE ต้องไปดูตาราง value ใน ppt
// // 2. if node type is an elementL node, display "Hello, HTML node" otherwise, display "Hello, any node"
// if (document.firstChild.nodeType === Node.ELEMENT_NODE) {
//     console.log("Hello, HTML node")
// } else {
//     console.log("Hello, any node")
// }

// const divElement = document.getElementById("123")
// console.log(divElement.nodeName) //DIV
// console.log(divElement.nodeType) //1
// console.log(divElement.nodeValue) //null

// const pText = divElement.childNodes[1]
// console.log(pText) // <p>#1</p>
// console.log(pText.nodeName) //P
// console.log(pText.nodeType) //1
// console.log(pText.nodeValue) //null

// // โจทย์สร้าง <p id = 'p5'>#5</p> ใน DOM Tree โดย ให้มันไปเป็นลูก body โดยไปต่อท้าย 
// // (ที่ยังไม่อยากแทรกให้มันอยู่ตรงกลาง เพราะมันต้องใช้ insert before)
// //1. สร้าง element <p></p>
// const pElement = document.createElement('p')
// //2. สร้าง attribute id = 'p5' 
// // const idAttr = document.createAttribute('id')
// // idAttr.value = 'p5'
// //เขียนแบบทางลัด
// pElement.setAttribute("id", "p5") //ซึ่งถ้าทำอันนี้ไม่ต้องทำการ binding ในขั้นตอนที่ 3 
// //3. binding id = "p5" to <p>
// // pElement.setAttributeNode(idAttr) //จะได้หน้าตา <p id="p5"></p>
// //4. create text value '#5'
// // const pText = document.createTextNode('#5')
// //เขียนแบบทางลัด 
// pElement.textContent = "#5" //ซึ่งถ้าทำอันนี้ไม่ต้องทำการ binding ในขั้นตอนที่ 5
// //5. binding '#5' to <p>
// //pElement.appendChild(pText)
// //6. binding <p id = "p5">#5</p> to <body>
// const body = document.body
// body.appendChild(pElement) //<body>...<p id="p5">#5</p></body>

// let el = document.getElementById("demo")
// console.log(el.innerHTML)
// console.log(el.innerText)
// console.log(el.textContent)

//1. append <p> under <div id="demo">
const demoDiv = document.getElementById('demo')

//1.5 add format='italic' attribute to <p>
const pElement = document.createElement('p')
pElement.setAttribute("format", "italic")

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
let p1 = document.createElement('p')
p1.setAttribute("format", "italic")
p1.innerHTML = "<i>Sample Italic Text</i>"
demoDiv.appendChild(p1)

//2.2  add <i>Sample Italic Text</i> with innerText
let p2 = document.createElement('p')
p2.setAttribute("format", "italic")
p2.innerText = "<i>Sample Italic Text</i>"
demoDiv.appendChild(p2);

//2.3 add <i>Sample Italic Text</i> with textContent
let p3 = document.createElement('p')
p3.setAttribute("format", "italic")
p3.textContent = "<i>Sample Italic Text</i>"
demoDiv.appendChild(p3);