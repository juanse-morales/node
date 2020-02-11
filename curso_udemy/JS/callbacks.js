// Un callback es una función X que se usa como argumento de otra función Y. Cuando se llama a Y, ésta ejecuta X.
// Para conseguirlo, usualmente lo que se pasa a Y es el puntero de X.

const booksDb = [
  {
    id: 1,
    title: 'Clean code'
  },
  {
    id: 2,
    title: 'The pragmantic programmer' 
  },
  {
    id: 3,
    title: 'Web Development with Node.Js'
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

getBookById(4, (err, book)=>{
  if (err){
    return console.log(err.message);
  }

  return console.log(book);
});