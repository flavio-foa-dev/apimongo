import  express  from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const PORT = process.env.PORT || 3002;


const pathAtual = url.fileURLToPath(import.meta.url);
const pathHTML = path.join(pathAtual, '../', 'public');
app.use(express.static(pathHTML));

const createServer = http.createServer(app);
createServer.listen(PORT, ()=> console.log('listening on port', PORT));

const io = new Server(createServer);

io.on('connection', (socket) => {
  console.log('connection established', socket.id);
  socket.on('message', (message) => {
    socket.broadcast.emit('message_client', message);
  });

  socket.on('docTitle', (docTitle) => {
    console.log('docTitle', docTitle);
  });

});