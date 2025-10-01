// //1.display all child nodes under  <ul id="appetizer">
// const appetizerElement = document.getElementById('appetizer')
// //หรือเขียนแบบนี้ก็ได้ const appetizerElement = document.querySelector('#appetizer')
// console.log(appetizerElement.childNodes)

// //2.อยากได้ meat เเรกในเอกสาร
// const meatElement= document.querySelector('.meat')
// console.log(meatElement) //<li class="meat">Chicken Wings</li>

// //3. อยากได้ ทุก meat ในเอกสาร
// const meatAllElement= document.querySelectorAll('.meat')
// //3.1 เนื่องด้วยผลออกมาเป็น NodeList จง loop element ทุกตัวของ meat
// // meatAllElement.forEach((ele) => console.log(ele)) //จะได้ทุก meat 

// //4. find meat element that contain a text value "soup" 
// meatAllElement.forEach((ele) => {
//     if(ele.textContent.toLowerCase().includes('soup')){ //จะใช้ textContent หรือ innerHTML ก็ได้
//         console.log(ele)
//     }
// })

// //4.1 ถ้าให้เก็บลงตัวแปร เพื่อเอาไปทำงานต่อ
// const result = []
// meatAllElement.forEach((ele) => {
//     if(ele.textContent.toLowerCase().includes('soup')) {
//         result.push(ele)
//     }
// })
// console.log(result)

// //5. go to the first child element node under <ul id="soup"> and display all sibling nodes(ไปทางขวา)
// /* Expected output
//         <li class="meat">Spicy Bacon-Corn Soup</li>
//         <li class="vegan">Vegetable Soup</li>
//         <li class="meat">Beef Soup</li>
//         <li class="vegan">Coconut Soup</li> */
// const ulELement = document.querySelector('#soup')
// let curNode = ulELement.firstElementChild
// //หรือเขียนแบบนี้ก็ได้ let curNode = ulElement.children[0]
// while(curNode !== null) {
//     console.log(curNode)
//     curNode = curNode.nextElementSibling
// }


// //1.getElementsByName(), return NodeList data type
// const fnameElement = document.getElementsByName("fname")
// console.log(fnameElement.length)
// fnameElement.forEach((ele) => console.log(ele))

// //2. getElementsByTagName(), return HTMLCollection (array-like) data type
// const inputElements = document.getElementsByTagName('input')
// Array.from(inputElements).forEach((ele) => console.log(ele))

// //3. getElementByClassName(), return HTMLCollection (array-like) data type
// const veganElements = document.getElementsByClassName('vegan')
// Array.from(veganElements).forEach((ele) => console.log(ele))

// //4. find the first element of document that has an ID value "appetizer" or "soup"
// const firstElement = document.querySelector("#appetizer, #soup");
// console.log(firstElement);

// //5. fiind all class meat elements under <ul id="appetizer"> or <ul id="soup">
// const meatElemet = document.querySelectorAll("#appetizer .meat, #soup .meat"); //เว้นวรรคคือ ancestor descendant
// meatElemet.forEach((ele) => console.log(ele));









// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.






/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// // (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
// //1.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //1.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//   if (element.textContent.trim().includes("Beef Soup")) refNode = element
// })
// //1.3 create node <li class="vegan">Cabbage Soup</li>
// const newNode = document.createElement("li")
// newNode.textContent = "Cabbage Soup"
// newNode.setAttribute("class", "vegan")
// //1.4 insertBefore(newNode, refNode)
// soupUlElement.insertBefore(newNode, refNode)


// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// // 2. remove Vegetable Soup
// //2.1 get its parent
// const soupUlElement = document.getElementById("soup")
// //2.2 get ref node -Beef Soup
// let refNode = null
// Array.from(soupUlElement.children).forEach((element) => {
//   if (element.textContent.trim() === "Vegetable Soup") refNode = element
// })
// //2.3 remove
// soupUlElement.removeChild(refNode)


//  3. replace Beef Soup with Pork Soup
//2.1 get its parent
const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
//2.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//2.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)








