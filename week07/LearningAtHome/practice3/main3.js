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