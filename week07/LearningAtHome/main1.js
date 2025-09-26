//1. จงสร้าง <p id="p5">#5</p> แล้วแทรกไว้ ท้าย <body>
const p5 = document.createElement('p')
p5.setAttribute('id', 'p5')
p5.textContent = '#5'
const body = document.body
body.appendChild(p5)

//2. จงสร้าง <p id="p6">#6</p> แล้วแทรกไว้ ก่อน <script> tag ใน <body>
const p6 = document.createElement('p')
p6.setAttribute('id', 'p6')
p6.textContent = '#6'
const scriptTag = document.querySelector('script')
document.body.insertBefore(p6, scriptTag)

/* 3.สมมติว่ามี <p id="source">Hello</p>
จง clone element นี้ แล้วตั้ง id ใหม่เป็น "clone" และแทรกไว้ ท้าย <body> */


/* 4. สมมติว่ามี <div id="old">Old Div</div>
จงสร้าง <p id="new">New Paragraph</p> แล้ว แทนที่ <div id="old"> ด้วย <p> ที่สร้างใหม่ */


/* 5. จงสร้าง comment node "This is a comment" แล้วแทรกไว้ ท้าย <body> */