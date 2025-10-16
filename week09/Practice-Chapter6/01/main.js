const createBtn = document.getElementById('submit')
createBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const allInputEles = document.querySelectorAll('input')
  const isValidInput = Array.from(allInputEles).every(
    (inputEle) => inputEle.value.trim().length !== 0
  )
  const pEle = document.querySelector('p')
  if (isValidInput) {
    pEle.textContent = 'your data completed'
    pEle.style.color = 'green'
  } else {
    pEle.textContent = 'missing some values, please try again!'
    pEle.style = 'color:red'
  }

  const password = document.getElementById('password').value.trim()
  const confirmPassword = document
    .getElementById('confirm-password')
    .value.trim()
  if (password !== confirmPassword) {
    pEle.setAttribute('style', 'color:red')
    pEle.textContent = 'password and confirm do not match, check again'
  }
})
// ทำเอง
// const form = document.querySelector("form")
// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const confirmPassword = document.getElementById("confirm-password")
// const message = document.querySelector("p")

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const user = username.value.trim()
//     const mail = email.value.trim()
//     const pass = password.value.trim()
//     const confirm = confirmPassword.value.trim()

//     //ตรวจ field ว่าง
//     if (!user || !mail || !pass || !confirm) {
//       message.style.color = "red"
//       message.textContent = "missing some values, please try again!"
//       return
//     }

//     // รหัสผ่านตรงกันมั้ย
//     if (pass !== confirm) {
//       message.style.color = "red"
//       message.textContent = "password and confirm do not match, check again"
//       return;
//     }

//     //ผ่านทุกเงื่อนไข
//     message.style.color = "green";
//     message.textContent = "your data completed";
//   });