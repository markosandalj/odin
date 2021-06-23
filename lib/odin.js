'use strict';

function Book(title, author, pages) {
    var _this = this;

    var isRead = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        var isReadText = _this.isRead ? 'already read' : 'is note read yet';
        return _this.title + ' by ' + _this.author + ', ' + _this.pages + ' pages, ' + isReadText;
    };
}

function addBookToLibrary() {
    console.log('Add book: \n');
}

var hobbitBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(hobbitBook.info());