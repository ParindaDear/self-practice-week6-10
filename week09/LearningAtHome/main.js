/*ข้อ1. Click Event :
เมื่อคลิกปุ่ม “Click Me” ให้แสดงข้อความว่า "You clicked the button!" ใน <p id="clickResult"> */
const clickBtn = document.getElementById('clickBtn');
const clickResult = document.getElementById('clickResult');

clickBtn.addEventListener('click', () => {
  clickResult.textContent = 'You clicked the button!';
});


/*ข้อ2 Mouse Events :
เมื่อเอาเมาส์ไปชี้ที่ #colorBox ให้เปลี่ยนสีเป็นแดง และเมื่อเอาเมาส์ออก ให้กลับมาเป็นฟ้า */
const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mouseover', () => {
  colorBox.style.backgroundColor = 'tomato';
});

colorBox.addEventListener('mouseout', () => {
  colorBox.style.backgroundColor = 'lightblue';
});

/*ข้อ3 Input Event :
เมื่อพิมพ์ในช่อง #liveInput ให้ข้อความใน <p id="liveDisplay"> เปลี่ยนแบบ real-time */
const liveInput = document.getElementById('liveInput');
const liveDisplay = document.getElementById('liveDisplay');

liveInput.addEventListener('input', (event) => {
  liveDisplay.textContent = event.target.value;
});

/*ข้อ4 Form Submit :
เมื่อกดปุ่ม submit ให้แสดงข้อความ "Form submitted!" ใน <p id="formMsg"> โดยไม่ reload หน้า (preventDefault()) */
const demoForm = document.getElementById('demoForm');
const formMsg = document.getElementById('formMsg');

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMsg.textContent = 'Form submitted!';
});


/*ข้อ5 Event Delegation:
เมื่อคลิก <li> ใน <ul id="taskList"> ให้ลบรายการนั้นออกจาก list */
const taskList = document.getElementById('taskList');
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.remove(); 
  }
});