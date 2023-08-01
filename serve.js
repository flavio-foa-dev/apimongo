const http = require("http")
const PORT = 4000

const routes = {
  "/": "Curso de node",
  "/books": "listagem de livros",
  "/authors": "listagem de autores",
  "/store": "listagem de Products comprados"

}


const serve = http.createServer(function(req, res) {
  console.log(req.url)
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(routes[req.url])
})

serve.listen(PORT, ()=> console.log('listening on port', PORT))
