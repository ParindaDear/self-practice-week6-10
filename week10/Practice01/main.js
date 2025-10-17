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
/* โปรแกรมเปลี่ยนสีพื้นหลัง สีตัวอักษร และขนาดฟอนต์
   - บันทึกค่าลง localStorage
   - โหลดค่าที่เคยบันทึกไว้เมื่อเปิดเว็บใหม่
   - ปุ่ม Reset ล้างค่าเป็นค่าเริ่มต้น
*/
document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById('bgColor');
  const fColor = document.getElementById('fontColor');
  const fSize = document.getElementById('fontSize');
  const save = document.getElementById('saveBtn');
  const reset = document.getElementById('resetBtn');

  const defaultSettings = {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    fontSize: "medium"
  };

  function applySettings(settings) {
    document.body.style.backgroundColor = settings.backgroundColor;
    document.body.style.color = settings.fontColor;

    switch (settings.fontSize) {
      case "small":
        document.body.style.fontSize = "12px";
        break; //หยุดการทำงานของ switch หลังจากคำสั่งนี้ เพื่อไม่ให้ไปทำ case อื่นต่อ
      case "medium":
        document.body.style.fontSize = "16px";
        break;
      case "large":
        document.body.style.fontSize = "20px";
        break;
    }
    //3 บรรทัดนี้มีไว้เพื่อ อัปเดตค่าของ input ในฟอร์ม ให้ตรงกับค่าที่ดึงมาจาก localStorage
    background.value = settings.backgroundColor;
    fColor.value = settings.fontColor;
    fSize.value = settings.fontSize;
  }

  // อันนี้ทำให้เวลาปิด tab ไปการตั้งค่าต่างๆก็ยังอยู่ (โหลดค่าที่บันทึกไว้จาก localStorage)
  const savedSettings = JSON.parse(localStorage.getItem("userSettings")); //userSettings เป็นชื่อ key ที่เราเลือกตั้งเองเพื่อเก็บค่าการตั้งค
  if (savedSettings) {
    applySettings(savedSettings);
  } else {
    applySettings(defaultSettings);
  }
    // เพราะ localStorage เก็บข้อมูลได้แค่ string
    // เราต้อง parse() string กลับมาเป็น object ก่อนจึงจะสามารถส่งให้ฟังก์ชัน applySettings() ใช้งานได้

  // เมื่อกดปุ่ม Save มันจะบันทึกลง localStorage
  save.addEventListener("click", () => {
    const userSettings = {
      backgroundColor: background.value,
      fontColor: fColor.value,
      fontSize: fSize.value
    };

    localStorage.setItem("userSettings", JSON.stringify(userSettings));
    applySettings(userSettings);
    alert("Settings saved successfully!");
  });

  reset.addEventListener("click", () => {
    localStorage.removeItem("userSettings");
    applySettings(defaultSettings);
    alert("Settings reset to default.");
  });
});