const listDoc = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const input = document.getElementById('input-documento');





form.addEventListener('submit',(e) => {
  e.preventDefault();
  handleListDoc(input.value);
});

function handleListDoc(doc) {
  listDoc.innerHTML += `
  <a href="doc.html?nome=${doc}" class="list-group-item list-group-item-action">
  ${doc}
</a>
  `;
}

handleListDoc('JavaScript');
handleListDoc('Node');
handleListDoc('Socket.io');
