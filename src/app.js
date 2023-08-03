import express  from 'express';
import db from './config/dbconnect.js';
import routes from './routers/index.js';
import hendleError from "./middlewares/handleError.js"

db.on('error', console.log.bind(console, 'error de conexao'));
db.once('open', ()=> console.log('Ah, we have our first user!'));

const books = [
  {
    'id': 1,
    'name': 'Senhor dos Aneis',
    'author': 'Soray'
  },
  {
    'id': 2,
    'name': 'Senhor dos Aneis 2',
    'author': 'Soray'
  }
];

const app = express();
app.use(express.json());
routes(app);
app.use(hendleError)

app.get('/books/:id', function(req, res) {
  const {id} = req.params;
  const index = getBookIndex(id);

  if(index >= 0) {
    res.status(201).json(books[index]);
  }else {
    res.status(201).json({'messsage': 'not found'});
  }
});


app.delete('/books/:id', function(req, res) {
  const {id} = req.params;
  const index = getBookIndex(id);
  books.splice(index, 1);
  res.status(200).json({message: `Book deleted successfully' ${id}`});
});

export function getBookIndex(id) {
  return books.findIndex((book) => book.id === parseInt(id, 10));
}


export default app;