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
    const newBook = new Book (title.value, author.value, pages.value)
    myLibrary.push(newBook)
    console.log(newBook);
}