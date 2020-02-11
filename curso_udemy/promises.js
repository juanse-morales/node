// Promesa: es una forma de manejar la sincronía de Js que surgió a partir de la versión 6.
// Es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.
// Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.

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

function getBookById(id){
  return new Promise((resolve, reject)=> {
    const book = booksDb.find(book => book.id === id);
    if (!book){
      const error = new Error();
      error.message = "Book not found!";
      reject(error);
    }

    resolve(book);
  });
}

function getAuthorById(id){
  return new Promise((resolve, reject)=>{
    const author = authorsDb.find(author => author.id === id);
    if (!author){
      const error = new Error();
      error.message = "Author not found!";
      reject(error);
    }

    resolve(author);
  });
}

getBookById(1)
  .then(book => {
    return getAuthorById(book.id);
  })
  .then(author => {
    console.log(author);
  })
  .catch(err=>{
    console.log(err.message);
  });