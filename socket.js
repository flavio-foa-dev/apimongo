import  express  from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const PORT = process.env.PORT || 3002;

const doc = [
  {
    name: 'JavaScript',
    text: 'test'
  },
  {
    name: 'Node',
    text: 'test'
  },
  {
    name: 'Socket.io',
    text: 'test'
  }
];

function getByName(name) {
  return  doc.find((item) => item.name === name);
}

const pathAtual = url.fileURLToPath(import.meta.url);
const pathHTML = path.join(pathAtual, '../', 'public');
app.use(express.static(pathHTML));

const createServer = http.createServer(app);
createServer.listen(PORT, ()=> console.log('listening on port', PORT));

const io = new Server(createServer);

io.on('connection', (socket) => {
  console.log('connection established', socket.id);

  socket.on('docTitle', (docTitle) => {
    socket.join(docTitle);
    const document = getByName(docTitle);

    document && socket.emit('doc', document);

  });

  socket.on('message', (message, docTitle) => {
    //socket.broadcast.emit('message_client', message);

    const document = getByName(docTitle);
    if (document) {
      document.text = message;

      socket.to(docTitle).emit('message_client', message);
    }
  });


});