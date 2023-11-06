export function displayBooks() {
    const bookShelf = document.querySelector(".display-books");

    bookShelf.innerHTML = ""
    let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));

    Object.entries(uploadedBooks).forEach((book) => {
        let bookCase = `
        <div class="book">
            <p>${book[1].title} by ${book[1].author}</p>
            <button id="${book[0]}" class="trash">TRASH</button>
        </div>
        `
        bookShelf.innerHTML += bookCase;
    })

    //Trash a book
    const trashButtons = document.querySelectorAll(".trash");

    trashButtons.forEach((trashButton) => {
        trashButton.addEventListener('click', () => {
            let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));
            delete uploadedBooks[trashButton.id];   
            localStorage.setItem("Uploaded books", JSON.stringify(uploadedBooks));

            displayBooks();
        })
    })
}