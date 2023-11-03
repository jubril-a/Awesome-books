const navLinks = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll("section");

const books = {
    1: {
        title: "MINDSET: The New Psychology of Success",
        author: "Carol Dweck"
    },
    2: {
        title: "Atomic Habits",
        author: "James Clear"
    },
    3: {
        title: "The Subtle Art of Not Giving a F*CK",
        author: "Mark Manson"
    },
}



navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let id = e.target.href.split("#")[1];
        let currentSection;

        for (let section of sections) {
            if (section.id == id) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }

        }
    })
})

// Upload books only if it has not been uploaded before
if (!localStorage.getItem("Uploaded books")) {
    localStorage.setItem("Uploaded books", JSON.stringify(books));
}

// Display uploaded books
const bookShelf = document.querySelector(".display-books");

function displayBooks() {
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

displayBooks()

function getNextId(obj) {
    return Math.max.apply(Math, Object.keys(obj)) + 1
}


//Add New Book
const addButton = document.querySelector('[type="submit"]');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let uploadedBooks = JSON.parse(localStorage.getItem("Uploaded books"));

    const bookTitle = document.querySelector("#book-title").value;
    const bookAuthor = document.querySelector("#book-author").value;

    // Upload book input fields are not empty
    if (bookTitle && bookAuthor) {
        uploadedBooks[getNextId(uploadedBooks)] = {
            title: bookTitle,
            author: bookAuthor
        }
    
        localStorage.setItem("Uploaded books", JSON.stringify(uploadedBooks));
    
        displayBooks();
        document.querySelector("form").reset();
    }  
})

//Date and Time
dateWrapper = document.querySelector(".date");

function dateTimer() {
    date = new Date();
    formattedDate = date.toString().split(" ").slice(0, 5).join(" ");
    dateWrapper.innerHTML = formattedDate;
}

setInterval(dateTimer, 1000)
