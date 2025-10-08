const message = document.querySelector('#message') 
const display = document.querySelector('p') 
message.addEventListener('input', function () {
    console.log("input handler function is working...")
    display.textContent = message.value
 })