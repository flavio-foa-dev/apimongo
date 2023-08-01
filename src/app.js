import express  from "express";

const books = [
  {
    "id": 1,
    "name": "Senhor dos Aneis",
    "author": "Soray"
  },
  {
    "id": 2,
    "name": "Senhor dos Aneis 2",
    "author": "Soray"
  }
]

const app = express();
app.use(express.json());


app.get('/', function(req, res) {
  res.status(200).send({message: 'Success'})
})

app.get('/books/:id', function(req, res) {
  const {id} = req.params
  const index = getBookIndex(id)

  if(index >= 0) {
    res.status(201).json(books[index])
  }else {
    res.status(201).json({"messsage": "not found"})

  }
})


app.get('/books', function(req, res) {
  res.status(200).json(books)
})

app.post('/books', function(req, res) {
  req.body.id = books.length + 1
  books.push(req.body)
  console.log(req.body)
  res.status(201).json({message: 'add winth Success'})
})

app.put('/books/:id', function(req, res) {
  const {id} = req.params
  const index = getBookIndex(id)
  books[index].author = req.body.author
  res.status(201).json(books[index])
})

app.delete('/books/:id', function(req, res) {
  const {id} = req.params
  const index = getBookIndex(id)
  books.splice(index, 1)
  res.status(200).json({message: `Book deleted successfully' ${id}`})
})

function getBookIndex(id) {
  return books.findIndex((book) => book.id === parseInt(id, 10))
}


export default app