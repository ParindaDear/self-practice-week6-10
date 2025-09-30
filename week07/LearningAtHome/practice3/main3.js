/* Part A: Attribute Practice */
/* Task A1: Get all attributes of <header id="main-header"> and display how many attributes it has */
const header = document.getElementById("main-header");
const headerAttributes = header.attributes;
console.log(headerAttributes.length);

/* Task A2: Loop through attributes of <article id="post-2"> and print each attribute’s name ,value and tag name */
const post2 = document.getElementById('post-2')
Array.from(post2.attributes).forEach(attr => {
    console.log(attr.name, attr.value, attr.ownerElement.tagName)
})

/* Task A3: Use .getAttribute() to get the values of class and data-author from <article id="post-2"> */
console.log(post2.getAttribute("class"));
console.log(post2.getAttribute("data-author"));

/* Task A4: Add a new attribute data-category="news" to <article id="post-1"> */
const post1 = document.getElementById("post-1");
post1.setAttribute("data-category", "news");
console.log(post1.getAttribute("data-category"));

/* Part B: Node Type & Traversal */
/* Task B1: Print the node type of the first child of <body> */
const body = document.body;
console.log(body.firstChild.nodeType);

/* Task B2: If it’s an element node, display "First child is an element"; otherwise "First child is not an element" */
if (body.firstChild.nodeType === Node.ELEMENT_NODE) {
  console.log("First child is an element");
} else {
  console.log("First child is not an element");
}

/* Task B3: Traverse all children of <main id="content"> and print each child’s nodeName and nodeType */
const mainContent = document.getElementById("content");
mainContent.childNodes.forEach(node => {
  console.log(node.nodeName, node.nodeType);
});

/* Task B4: Print all sibling nodes of <nav> */
const nav = document.querySelector("nav");
console.log(nav.previousSibling);
console.log(nav.nextSibling);