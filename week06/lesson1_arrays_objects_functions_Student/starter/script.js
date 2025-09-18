// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const newQuotes = quotes.filter(q => q.id !== id)
  quotes.length = 0 //ล้าง array เดิม
  quotes.push(...newQuotes) // ใส่ค่าที่เหลือกลับไป

}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const newQuotes = quotes.map(q => q.id === id ? { ...q, ...updatedQuote } : q) //  merge ค่าของ quote เดิมเข้ากับค่าที่ส่งมา (updatedQuote) โดยใช้ spread
  quotes.length = 0
  quotes.push(...newQuotes)
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id: 1, content: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"})
addQuote({id: 2, content: "Life is what happens when you're busy making other plans.", author: "John Lennon"})
addQuote({id: 3, content: "Get busy living or get busy dying.", author: "Stephen King"})

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)

// TODO: Update 1 quote using updateQuote()
updateQuote(3, {content: "Stay hungry, stay foolish.", author: "Steve Jobs"})

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())




