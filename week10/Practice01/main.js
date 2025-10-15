/*ให้เขียนโปรแกรมหน้าเว็บที่มีฟอร์มให้ผู้ใช้เลือก
1. Background Color
2. Font color
3. Font Size (small, medium, large – dropdown) ให้กำหนดตัวเลขและขนาดด้วยตัวเอง
    - เมื่อกดปุ่ม Save ให้บันทึกค่าการตั้งค่าไว้ใน localStorage และเมื่อเปิดหน้าเว็บใหม่ ให้ดึงค่าที่บันทึกไว้
      มาปรับการแสดงผลของหน้า (เปลี่ยนสีพื้นหลัง/สีอักษร/และขนาดตัวอักษรที่เลือก)
    - เพิ่มปุ่ม Reset เพื่อล้างค่าทั้งหมดใน localStorage
    - Default เป็นพื้นสีขาว และตัวอักษรสีดำ ขนาด font เป็น medium
คำแนะนำเพิ่มเติม:
    - ใช้ DOMContentLoaded เพื่อโหลดค่าที่บันทึกไว้มาแสดงและปรับเปลี่ยนค่าตามที่กำหนด
    - ใช้ Event Listener กับปุ่ม Save และ Reset */
document.addEventListener("DOMContentLoaded", () => {
    const backgroundColor = document.getElementById('bgColor')
    const fontColor = document.getElementById('fontColor')
    const fontSize = document.getElementById('fontSize')
    const saveButton = document.getElementById('saveBtn')
    const resetButton = document.getElementById('resetBtn')
})

const defaultSetting = {
    backgroundColor: "#fff",
    fontColor: "#000",
    fontSize: "medium"
};

function applySettings(setting) {
    document.body.style.backgroundColor = setting.backgroundColor;
    document.body.style.color = setting.frontColor;

}

saveButton.addEventListener("click", () => {
    const userSettings = {
      backgroundColor: backgroundColor.value,
      frontColor: frontColor.value,
      frontSize: frontSize.value
    };

    localStorage.setItem('userSetting')
})







// const form = document.getElementById("styleForm");
// const defaults = {
//   bgColor: "#ffffff",
//   fontColor : "#000000",
//   fontSize : "16",
// }
// function loadSetting() {
//   const bgColor = localStorage.getItem("bgColor") || defaults.bgColor;
//   const fontColor = localStorage.getItem("fontColor") || defaults.fontColor;
//   const fontSize = localStorage.getItem("fontSize") || defaults.fontSize;
//   document.body.style.backgroundColor = bgColor;
//   document.body.style.color = fontColor;
//   document.body.style.fontSize = fontSize + "px";

// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const bgColor = form.bgColor.value;
//   const fontColor = form.fontColor.value;
//   const fontSize = form.fontSize.value;
//   localStorage.setItem("bgColor", bgColor);
//   localStorage.setItem("fontColor", fontColor);
//   localStorage.setItem("fontSize", fontSize);

//     document.body.style.backgroundColor = bgColor;
//     document.body.style.color = fontColor;
//     document.body.style.fontSize = fontSize + "px";
// });

// document.getElementById("resetBtn").addEventListener("click", () => {
//     localStorage.removeItem("bgColor");
//     localStorage.removeItem("fontColor");
//     localStorage.removeItem("fontSize");
//     loadSetting();
// });

// loadSetting();