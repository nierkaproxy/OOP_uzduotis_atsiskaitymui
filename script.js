class Book {
    constructor(isbn, author, released, name, description, pages){
        this.isbn = isbn;
        this.author = author;
        this.released = released;
        this.name = name;
        this.description = description;
        this.pages = pages;
    }
    getInfo(){
        console.log(this.isbn, this.author, this.released,
             this.name, this.description, this.pages)
    }
}

const book1 = new Book('IT-12345', 'F. Scott Fitzgerald', 1925, 'The Great Gatsby',
' The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school).',
208);
const book2 = new Book('IT-54321', 'James Clear', 2018, 'Atomic habits', 'An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.',
306);
const book3 = new Book('IT-98765', 'J. K. Rowling', 1997, 'Harry Potter and philosophers stone', 'It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out hes a wizard.',
223);

console.log(book1);

console.log(book2);

console.log(book3);

class ElBook extends Book{
    constructor(isbn, author, released, name, description, pages, format){
        super(isbn, author, released, name, description, pages);
        this.format = format;
    }
    toArray(){
      const newArray = [this.isbn, this.author, this.released,
        this.name, this.description, this.pages, this.format];
      console.log(newArray);
    }
    static palyginimas(book1, book3){
      const masyvasNaujas = [book1, book3];
      console.log(masyvasNaujas);
    }
}

const book4 = new ElBook('IT-54321', 'James Clear', 2018, 'Atomic habits', 'An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.',
306, 'Hardcover');

book4.toArray();
ElBook.palyginimas();

