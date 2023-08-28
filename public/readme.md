Diferenciar o protocolo HTTP do WebSockets:

O protocolo HTTP trabalha com o modelo requisição-resposta, que não é adequado para aplicações quando queremos criar uma comunicação bidirecional e em tempo real entre cliente e servidor. Para esses casos, utilizamos o protocolo WebSockets.
Criar um servidor Socket.IO com Express
Escutar o evento de conexão do cliente:
Utilizamos o método io.on(), que recebe como primeiro parâmetro o nome do evento (por exemplo, “connection”) e como segundo parâmetro uma função callback, que será executada assim que o evento for escutado.


emitir o seu primeiro evento no Socket.IO com o método emit()!

Para isso, utilizamos esse método do lado do cliente, para em seguida poder escutá-lo do lado do servidor com o método on().

Também vimos que os eventos do Socket.IO podem carregar dados no segundo parâmetro do método emit(). No nosso caso, enviamos o texto do editor, um dado do tipo string. Mas além desse, quais outros tipos de dados eu posso enviar junto com os eventos?

O Socket.IO permite que qualquer dado serializável do JavaScript possa ser enviado junto com um evento. Um dado serializável é um dado que pode ser convertido em um determinado formato e, posteriormente, pode ser convertido de volta para sua forma original. Chamamos a recuperação do dado de desserialização.

O JavaScript possui os métodos nativos JSON.stringify() e JSON.parse() para, respectivamente, serializar e desserializar diversos tipos de dados, como os tipos primitivos, arrays e objetos. Alguns tipos de dados, como undefined, Function, Symbol, Infinity, NaN, entre outros, não são serializados corretamente com estes métodos, pois não são dados aceitos no formato JSON.

Acesse a documentação do JSON.stringify() para estudar mais sobre quais tipos de dados podem ser serializados!

Podemos falar que, “por debaixo dos panos”, os métodos JSON.stringify() e JSON.parse() são utilizados pelo Socket.IO ao enviar e receber os dados carregados pelos eventos! Dessa forma, não precisamos utilizá-los manualmente para a maioria dos tipos de dados.

Entretanto, uma atenção especial deve ser tomada para os tipos Map e Set do JavaScript. Eles não são serializados corretamente se utilizarmos JSON.stringify(), mas possuem métodos próprios para serialização.

Um objeto Map pode ser serializado e desserializado com o seguinte código:

const mapa = new Map();

const mapaSerializado = [...mapa.entries()];

const mapaOriginal = new Map(mapaSerializado);COPIAR CÓDIGO
De forma semelhante, um objeto Set pode ser serializado e desserializado com o seguinte código:

const set = new Set();

const setSerializado = [...set.keys()];

const setOriginal = new Set(setSerializado);COPIAR CÓDIGO
O tipo Date também merece atenção especial. Ao enviar um objeto Date como dado de um evento, ele será convertido para sua representação em string (por exemplo, 2022-11-03T19:11:54.073Z).

Então, ao receber esse dado do outro lado da comunicação, ele deve ser convertido de volta para o tipo Date. Para fazer isso, utilizamos o construtor Date(), passando a representação em string da data como parâmetro, como no exemplo a seguir:

const dataStr = "2022-11-03T19:11:54.073Z";

const data = new Date(dataStr);

Emitir seu primeiro evento a partir do cliente:

No front-end, utilizamos socket.emit() para emitir o evento "texto_editor" para o servidor, junto com o texto que foi digitado.
Emitir um evento para vários clientes a partir do servidor:

No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.
Organizar melhor os arquivos por responsabilidade:

No front-end, deixamos um arquivo responsável por lidar com as manipulações do HTML (documento.js) e outro responsável para lidar com as funções do Socket.IO (socket-front-documento.js).

obter os parâmetros da URL no lado do front-end! Vamos explorar um pouco mais as funções e variáveis que utilizamos?

Primeiramente, nós nos aproveitamos da classe URLSearchParams, que pode ser instanciada para criar um objeto que conterá informações da URL.

Existem diferentes tipos de dados válidos que podemos passar como parâmetro de URLSearchParams() para criar uma nova instância; como por exemplo uma string, um array de arrays ou um objeto. Os três exemplos abaixo são equivalentes:

// string como parâmetro
const parametros = new URLSearchParams("?nome=maria&sobrenome=eduarda");

// array de arrays como parâmetro
const parametros = new URLSearchParams([
  ["nome", "maria"],
  ["sobrenome", "eduarda"],
]);

// objeto como parâmetro
const parametros = new URLSearchParams({
  nome: "maria",
  sobrenome: "eduarda"
});COPIAR CÓDIGO
Note que, ao passar uma string, ela deve seguir o mesmo padrão dos parâmetros passados em uma URL: os parâmetros são separados por & e a chave e o valor de cada parâmetro são separados por =. E especificamente no caso do URLSearchParams(), a interrogação ? no início da string é opcional.

Mas no vídeo passamos o valor window.location.search como parâmetro de URLSearchParams(). De onde ele vem?

Window é um objeto global que contém várias propriedades e métodos do front-end. Uma dessas propriedades é a location, que é um objeto que possui métodos e propriedades relacionados à URL atual. E uma de suas propriedades é a search, que nos dá justamente uma string dos parâmetros da URL.

Assim, se você estiver em http://localhost:3000/documento.html?nome=JavaScript no navegador, o valor de window.location.search será "?nome=JavaScript".

Logo, chegamos ao código escrito em vídeo:

const parametros = new URLSearchParams(window.location.search);COPIAR CÓDIGO
Agora que a constante parametros é uma instância de URLSearchParams, ela possui métodos como get(), has(), entries(), entre outros. Então, adicionamos o seguinte código:

const nomeDocumento = parametros.get("nome");COPIAR CÓDIGO
Perceba que o método get() recebe o nome do parâmetro da URL e retorna seu valor. Assim, ainda usando a URL http://localhost:3000/documento.html?nome=JavaScript como exemplo, o código parametros.get("nome") irá nos retornar a string "JavaScript".

Agrupar clientes em salas do Socket.IO:

Utilizamos o método join() (do inglês “juntar”) para isso, passando como parâmetro o nome da sala na qual queremos colocar o cliente. No nosso caso, os nomes das salas eram os nomes dos documentos.
Emitir eventos para uma sala específica:

Para isso, utilizamos o método to() (do inglês “para”), passando como parâmetro o nome da sala para a qual queremos emitir o evento.
Enviar um dado de volta para o cliente com Reconhecimento:

Utilizamos esse recurso quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Para tal, passamos uma função como último parâmetro de emit(), a obtemos na função callback do lado do servidor e a executamos, passando como parâmetro o dado que interessa ao cliente.

Obter todos os documentos do banco de dados:

Utilizamos o método find(), que retorna um Cursor do MongoDB. Para transformá-lo em um array que contém todos os documentos, utilizamos o método toArray(). Enviando essa informação de volta ao cliente, a tela inicial poderá mostrar os documentos do banco de dados em vez de uma lista estática.
Adicionar um documento:

Utilizamos o método insertOne() para inserir um novo documento no MongoDB. Precisamos verificar se o documento não existe para então adicioná-lo. Por fim, o resultado da operação de adição possui a propriedade acknowledged, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para os clientes para adicionar o documento na interface front-end.
Excluir um documento:

Utilizamos o método deleteOne() para excluir um documento do MongoDB. O resultado da operação de exclusão possui a propriedade deletedCount, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para todos os clientes para realizar as operações necessárias no front-end.
Atualizar diferentes páginas a partir do mesmo evento:

A partir do evento de exclusão emitido pelo servidor, realizamos diferentes operações dependendo de qual página o cliente está. Quem estiver na página do documento excluído será redirecionado para a página inicial, e quem estiver na página inicial verá o documento ser excluído da lista.

