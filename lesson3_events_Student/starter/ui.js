// Lesson 3 - Events Starter
import { addQuote, updateQuote, deleteQuote, getAllQuotes } from "./quote.js";

let quotes = getAllQuotes()

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.dataset.id = quote.id;

  const contentP = document.createElement("p");
  contentP.textContent = quote.content;

  const authorP = document.createElement("p");
  authorP.textContent = quote.author;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id;

  div.append(contentP, authorP, editBtn, deleteBtn);

  // Event listeners for edit and delete
  editBtn.addEventListener("click", () => {
    idInput.value = quote.id;
    contentInput.value = quote.content;
    authorInput.value = quote.author;
  });

  deleteBtn.addEventListener("click", () => {
    deleteQuote(quote.id);
    deleteQuoteFromDOM(quote.id);
  });

  return div;
}


// Add, edit, delete quote functions
function addQuoteToDOM(quote) {
  const quoteEl = createQuoteElement(quote);
  quoteList.appendChild(quoteEl);
}

function updateQuoteInDOM(quote) {
  const div = quoteList.querySelector(`div[data-id='${quote.id}']`);
  if (div) {
    div.querySelector("p:nth-child(1)").textContent = quote.content;
    div.querySelector("p:nth-child(2)").textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const div = quoteList.querySelector(`div[data-id='${id}']`);
  if (div) div.remove();
}

function renderQuotes() {
  quoteList.innerHTML = "";
  const allQuotes = getAllQuotes();
  allQuotes.forEach(addQuoteToDOM);
}

function showRandomQuote() {
  const allQuotes = getAllQuotes();
  if (allQuotes.length === 0) {
    randomDisplay.textContent = "-- No quotes to show --";
    return;
  }
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[randomIndex];
  randomDisplay.textContent = `"${quote.content}" — ${quote.author}`;
}

// Event listeners for form submission, edit, and delete clicks
// Form submission event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = parseInt(idInput.value);

  if (!content || !author) return;

  if (id) {
    const updated = updateQuote(id, content, author);
    updateQuoteInDOM(updated);
  } else {
    const newQuote = addQuote(content, author);
    if (newQuote) addQuoteToDOM(newQuote);
  }

  form.reset();
});

// Random button click
randomBtn.addEventListener("click", showRandomQuote);

// Initial render
renderQuotes();