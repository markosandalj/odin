function Book(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        let isReadText = this.isRead ? 'already read' : 'is note read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isReadText}`
    }
}

function addBookToLibrary() {
    console.log('Add book: \n');
    
}

const hobbitBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(hobbitBook.info());