/* Task 1: Clone and Insert
   - Clone the first <article> inside #content
   - Change its <h2> text to "Article 3"
   - Insert it at the end of #content
*/
const content = document.getElementById('content')
const firstArticle = content.querySelector('article')
const cloneArticle = firstArticle.cloneNode(true)
cloneArticle.querySelector('h2').textContent = 'Article 3'
content.appendChild(cloneArticle)


/* Task 2: Wrap Elements
   - Create <div id="wrapper"></div>
   - Move all <p class="desc"> into it
   - Append the wrapper inside <section id="info">
*/
const info = document.getElementById('info')
const wrapper = document.createElement('div')
wrapper.setAttribute('id', wrapper)

const descs = info.querySelectorAll('.desc')
descs.forEach(p => wrapper.appendChild(p))
info.appendChild(wrapper)

/* Task 3: Complex Remove
   - Remove <h1 id="title">
   - Before removing, take its text and insert as new <p> inside #info
*/
const title = document.getElementById('title')
const newP = document.createElement('p')
newP.textContent = title.textContent
info.appendChild(newP)

title.parentNode.removeChild(title)