const box = document.getElementById("box");
const colorButton = document.querySelectorAll("[data-color]") //เลือกปุ่มทั้งหมดที่มี attribute data-color
                                                            //ผลลัพธ์จะเป็น NodeList ของปุ่ม 3 อัน (สีแดง, สีน้ำเงิน, สีเขียว)
colorButton.forEach((button) => { //เป็น NodeList เลยใช้ forEach ได้เลย
    button.addEventListener("click", (e) => { //ผูก event "click" กับแต่ละปุ่ม เวลาเราคลิกปุ่ม จะเรียก function (e) => {...} โดย e คือ Event object
        box.style.backgroundColor = e.target.dataset.color //e.target = ปุ่มที่ถูกกด
    })
})