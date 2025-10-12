// const message = document.querySelector('#message') 
// const display = document.querySelector('p') 
// message.addEventListener('input', function () {
//  display.textContent = message.value
//  })



// //ถ้าใช้ change
// const message = document.querySelector('#message') 
// const display = document.querySelector('p') 
// message.addEventListener('change', function () {
//  display.textContent = message.value
//  })


//ให้เห็นภาพ
const message = document.querySelector('#message') 
const display = document.querySelector('p') 
message.addEventListener('input', function () {
    console.log("input handler function is working...")
    display.textContent = message.value
 })