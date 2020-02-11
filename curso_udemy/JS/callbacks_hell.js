const booksDb = [
  {
    id: 1,
    title: 'Clean code',
    authorId: 1
  },
  {
    id: 2,
    title: 'The pragmantic programmer',
    authorId: 2
  },
  {
    id: 3,
    title: 'Web Development with Node.Js',
    authorId: 3
  }
];

const authorsDb = [
  {
    id: 1,
    name: 'Robert C. Martin'
  },
  {
    id: 2,
    name: 'Steve Forest'
  }
];

function getBookById(id, callback){
  const book = booksDb.find(book => book.id === id);
  if (!book){
    const error = new Error();
    error.message = "Book not found!";
    return callback(error);
  }

  callback(null, book);
}

function getAuthorById(id, callback){
  const author = authorsDb.find(author => author.id === id);
  if (!author){
    const error = new Error();
    error.message = "Author not found!";
    return callback(error);
  }

  callback(null, author);
}

getBookById(1, (err, book)=>{
  if (err){
    return console.log(err.message);
  }

  getAuthorById(book.authorId, (err, author) => {
    if (err){
      return console.log(err.message);
    }
    
    console.log(`This book ${book.title} was written by ${author.name}`);
  });

  return console.log(book);
});