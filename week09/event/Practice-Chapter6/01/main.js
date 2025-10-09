const form = document.querySelector("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const message = document.querySelector("p")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const user = username.value.trim()
    const mail = email.value.trim()
    const pass = password.value.trim()
    const confirm = confirmPassword.value.trim()

    //ตรวจ field ว่าง
    if (!user || !mail || !pass || !confirm) {
      message.style.color = "red"
      message.textContent = "missing some values, please try again!"
      return
    }

    // รหัสผ่านตรงกันมั้ย
    if (pass !== confirm) {
      message.style.color = "red"
      message.textContent = "password and confirm do not match, check again"
      return;
    }

    //ผ่านทุกเงื่อนไข
    message.style.color = "green";
    message.textContent = "your data completed";
  });