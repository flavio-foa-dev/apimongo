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