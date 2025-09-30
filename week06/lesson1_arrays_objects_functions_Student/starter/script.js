const quotes = []
let nextId = 1
function addQuote(content, author) {
  const prevLength = quotes.length
  const newQuote = { id: nextId++, content, author }
  if (quotes.push(newQuote) === prevLength + 1) return newQuote
  return undefined
}

function updateQuote(id, content, author) {
  const quote = quotes.find((q) => q.id === id)
  if (quote) {
    quote.content = content
    quote.author = author
  }
  return quote
}

function deleteQuote(id) {
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }
  return index
}

function getAllQuotes() {
  const currentQuotes = [...quotes]
  return currentQuotes
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
console.log(addQuote('The journey of a thousand miles begins with one step.', 'Lao Tzu'))
console.log(addQuote('Life is what happens when you are busy making other plans.', 'John Lennon'))
console.log(addQuote('Get busy living or get busy dying.', 'Stephen King'))

// TODO: Delete 1 quote using deleteQuote()
console.log(deleteQuote(2))

// TODO: Update 1 quote using updateQuote()
console.log(updateQuote(1, 'The journey of a thousand miles begins with one step.', 'Lao'))

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())
