function getNextId(obj) {
    return Math.max.apply(Math, Object.keys(obj)) + 1
}

export function addBook() {
    let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));
    const bookTitle = document.querySelector("#book-title").value;
    const bookAuthor = document.querySelector("#book-author").value;

    // Upload book if input fields are not empty
    if (bookTitle && bookAuthor) {
        uploadedBooks[getNextId(uploadedBooks)] = {
            title: bookTitle,
            author: bookAuthor
        }
    
        localStorage.setItem("Uploaded books", JSON.stringify(uploadedBooks));
        document.querySelector("form").reset();
    }  
}

