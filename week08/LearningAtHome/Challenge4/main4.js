const body = document.body
const lightBtn = document.getElementById("lightBtn")
const darkBtn = document.getElementById("darkBtn")

const savedTheme = localStorage.getItem("theme")

if (savedTheme) {
  body.className = savedTheme
} else {
  body.className = "light" 
}

function setTheme(themeName) {
  body.className = themeName
  localStorage.setItem("theme", themeName)
}

lightBtn.addEventListener("click", () => setTheme("light"))
darkBtn.addEventListener("click", () => setTheme("dark"))
