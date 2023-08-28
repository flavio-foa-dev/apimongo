const socket = io();

const textArea = document.getElementById('editor-texto');

textArea.addEventListener('keyup', (e) => {
  socket.emit('message', textArea.value);
});
