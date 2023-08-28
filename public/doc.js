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
  socket.emit('message', textArea.value);
});

socket.on('message_client', (message) => {
  textArea.value = message;
});

socket.emit('docTitle', docName);