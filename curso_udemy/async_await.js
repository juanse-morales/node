/* Async: cuando se llama a una función async, esta devuelve un elemento Promise. 
Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto.
Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

Await: La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise
sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de
la ejecución, el valor de la expresión await es la regresada por una promesa terminada. */

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

async function getBookById(id){
  const book = booksDb.find(book => book.id === id);
  if (!book){
    const error = new Error();
    error.message = "Book not found!";
    throw error;
  }

  return book;
}

async function getAuthorById(id){
  const author = authorsDb.find(author => author.id === id);
  if (!author){
    const error = new Error();
    error.message = "Author not found!";
    throw error;
  }

  return author;
}

async function main(){
  try{
    const book = await getBookById(20);
    const author = await getAuthorById(book.authorId);
    console.log(`This book ${book.title} was written by ${author.name}`);
  } catch (ex) {
    console.log(ex.message);
  }
}

main();