let myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayBook() {
        reset();
        display();
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    const newBook = new Book (title, author, pages);
    myLibrary.push(newBook);
    newBook.displayBook();
}

function display() {
    for (var i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        const actions = document.createElement("div");
        const check = document.createElement("div");
        const cardTitle = document.createElement("div");
        const cardAuthor = document.createElement("div");
        const cardPages = document.createElement("div");
        const remove = document.createElement('button');
        const label = document.createElement('label');
        const read = document.createElement("input");

        card.className = "card";
        actions.className = "actions";
        cardTitle.className = "cardTitle";
        cardAuthor.className = "cardAuthor"
        cardPages.className = "cardPages";
        check.className = "check";
    
        remove.id = i;
        read.setAttribute("type", "checkbox");
        read.id = "read"
        label.htmlFor = "read";

        cardTitle.innerHTML = myLibrary[i].title;
        cardAuthor.innerHTML = myLibrary[i].author;
        cardPages.innerHTML = myLibrary[i].pages + " pages";
        remove.innerHTML = "x";
        label.innerHTML = "Read?";

        remove.addEventListener('click',function(){ 
            if (this.id > -1) {
                myLibrary.splice(this.id, 1);
            }
            reset();
            display();
        }),
        
        document.getElementById("container").appendChild(card);
        document.getElementsByClassName("card")[i].appendChild(cardTitle);
        document.getElementsByClassName("card")[i].appendChild(cardAuthor);
        document.getElementsByClassName("card")[i].appendChild(cardPages);

        document.getElementsByClassName("card")[i].appendChild(actions);
        document.getElementsByClassName("actions")[i].appendChild(check);
        document.getElementsByClassName("check")[i].appendChild(label);
        document.getElementsByClassName("check")[i].appendChild(read);
        document.getElementsByClassName("actions")[i].appendChild(remove);
    }
}

document.getElementById("myform").addEventListener("submit", function(e){
    e.preventDefault();
    addBookToLibrary();
    document.getElementById("myform").reset();
  });


function reset() {
    container.innerHTML = null;
}