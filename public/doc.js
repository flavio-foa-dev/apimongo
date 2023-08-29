//import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';
import { io } from 'socket.io-client';
const socket = io();

// window.onload= function(){
//   const socket = io();
// };

const queryParams = new URLSearchParams(window.location.search);
const docName = queryParams.get('nome');

const textArea = document.getElementById('editor-texto');
const tituloDoc = document.getElementById('titulo-documento');
tituloDoc.textContent = docName || 'Doc sem Title';


textArea.addEventListener('keyup', () => {
  socket.emit('message', textArea.value, docName);
});

socket.on('message_client', (message) => {
  textArea.value = message;
});

socket.on('doc', (doc) => {
  console.log(doc);
  textArea.value = doc.text;
});

socket.emit('docTitle', docName);