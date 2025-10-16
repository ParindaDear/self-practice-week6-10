const keyLog = document.getElementById('keyLog')

document.addEventListener('keydown', (event) => {
  let keyPressed = event.key
  let message = `You pressed: ${keyPressed}`
  const pEle = document.createElement('p')

  if (keyPressed === 'Enter') {
    message = 'You pressed: Enter'
    pEle.style.color = 'blue'
  } else keyLog.style.color = 'black'
  pEle.textContent = message
  keyLog.appendChild(pEle)
})


// ทำเอง
// const inputElement = document.getElementById('keyInput')
// const keyLog = document.getElementById('keyLog')

// inputElement.addEventListener('keydown', (event) =>{
//     const p = document.createElement('p')
//     if(event.key === 'Enter'){
//         p.textContent  = "You pressed: Enter "
//         p.style.color = "blue"
//     } else {
//         p.textContent = `You pressed: ${event.key}`
//     }
//     keyLog.appendChild(p)
// })