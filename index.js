import { books } from "./modules/books.js"
import { displayBooks } from "./display-books.js"
import { addBook } from "./modules/add-book.js"
import { dateTimer } from "./modules/set-date.js"
import { navigate } from "./modules/navigation.js"

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(e)
    })
})


// Upload books only if it has not been uploaded before
if (!localStorage.getItem("Uploaded books")) {
    localStorage.setItem("Uploaded books", JSON.stringify(books));
}

// Display uploaded books
displayBooks()

//Add New Book
const addButton = document.querySelector('[type="submit"]');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBook()
    displayBooks();  
})

//Date and Time
setInterval(dateTimer, 1000)
