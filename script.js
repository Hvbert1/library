let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    const newBook = new Book (title.value, author.value, pages.value);
    myLibrary.push(newBook);
    reset();
    display();
}

function display() {
    for (var i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.className = "card";

        const cardTitle = document.createElement("div");
        const cardAuthor = document.createElement("div");
        const cardPages = document.createElement("div");

        cardTitle.className = "cardTitle";
        cardAuthor.className = "cardAuthor"
        cardPages.className = "cardPages";

        cardTitle.innerHTML = myLibrary[i].title;
        cardAuthor.innerHTML = myLibrary[i].author;
        cardPages.innerHTML = myLibrary[i].pages;
        
        document.getElementById("container").appendChild(card);
        document.getElementsByClassName("card")[i].appendChild(cardTitle);
        document.getElementsByClassName("card")[i].appendChild(cardAuthor);
        document.getElementsByClassName("card")[i].appendChild(cardPages);
    }
}

function reset() {
    container.innerHTML = null;
}