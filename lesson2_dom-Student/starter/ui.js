import { addQuote, getAllQuotes } from "./quote.js";

// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list");

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = "";

    for (const q of quotes) {
        const p = document.createElement("p");
        p.textContent = `"${q.content}" — ${q.author}`;
        quoteList.appendChild(p);
  }
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
addQuote("Stay hungry, stay foolish.", "Steve Jobs");
addQuote("The only way to do great work is to love what you do.", "Steve Jobs");
addQuote("In the middle of difficulty lies opportunity.", "Albert Einstein");

quotes = getAllQuotes();
renderQuotes();