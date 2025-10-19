// ----------------- Cookie Tracker -----------------
// โจทย์: สร้างปุ่มที่นับจำนวนครั้งที่กดและเก็บใน cookie (session cookie)
//       แสดงจำนวนครั้งบนหน้าเว็บ และค่าจะหายเมื่อปิด browser
const cookieBtn = document.getElementById("cookieBtn")
const cookieCountDisplay = document.getElementById("cookieCount")

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

function updateCookieDisplay() {
  cookieCountDisplay.textContent = getCookie("clickCount") || 0
}

cookieBtn.addEventListener("click", () => {
  let count = parseInt(getCookie("clickCount")) || 0
  count++
  document.cookie = `clickCount=${count}; path=/` // session cookie
  updateCookieDisplay()
})

updateCookieDisplay()

// ----------------- Session Like Counter -----------------
// โจทย์: สร้างปุ่ม Like ที่นับจำนวนครั้งใน tab ปัจจุบัน
//       ใช้ sessionStorage จำนวน Like จะหายเมื่อปิด tab/browser
const sessionBtn = document.getElementById("sessionBtn")
const sessionCountDisplay = document.getElementById("sessionCount")

function updateSessionDisplay() {
  sessionCountDisplay.textContent = sessionStorage.getItem("like") || 0
}

sessionBtn.addEventListener("click", () => {
  let like = parseInt(sessionStorage.getItem("like")) || 0
  like++
  sessionStorage.setItem("like", like)
  updateSessionDisplay()
})

updateSessionDisplay()

// ----------------- LocalStorage Like Counter -----------------
// โจทย์: สร้างปุ่ม Like ที่นับจำนวนครั้งและเก็บ persist ข้าม session
//       ใช้ localStorage ปิด browser แล้วยังเก็บจำนวน Like เดิม
const localBtn = document.getElementById("localBtn")
const localCountDisplay = document.getElementById("localCount")

function updateLocalDisplay() {
  localCountDisplay.textContent = localStorage.getItem("like") || 0
}

localBtn.addEventListener("click", () => {
  let like = parseInt(localStorage.getItem("like")) || 0
  like++
  localStorage.setItem("like", like)
  updateLocalDisplay()
})

updateLocalDisplay()
