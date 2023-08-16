A parte mais difícil de construir um sistema de software é decidir exatamente o que construir.

– Fred Brooks, O mítico homem-mês


# apimongo
Nodejs | API Rest | MongoDB | Express

### Comando	Atalho	Uso
install	i	Instala um novo módulo
list	ls	Lista os módulos instalados
test	t	Executa o script de teste especificado no package.json
--global	-g	Usado como um sinalizador para instalar um pacote globalmente (não só na pasta do projeto
--save	-S	Salva o módulo ao instalar
--save-exact	-E	Salva o módulo ao instalar, porém na versão exata mencionada
--save-dev	-D	Salva o módulo ao instalar, porém como uma dependência de desenvolvimento

### Comando	Descrição
npm home	Abre a página do projeto
npm repo	Abre o repositório de código do projeto
npm audit	Executa uma auditoria no projeto para identificar se existe alguma dependência com vulnerabilidade conhecida
npm update	Atualiza projetos para a última versão respeitando o package.json
npm outdated	Retorna a lista de dependências desatualizadas mostrando a versão mais recente
npm adduser	Adiciona um novo usuario no https://registry.npmjs.org para permitir a publicação de pacotes
npm publish	Faz a publicação do pacote no NPM

npm init @eslint/config

# NPM
npm install --save-dev @cucumber/cucumber
### BDD
O que é BDD (o Behaviour Driven Development)
BDD tenta melhorar a comunicação e colaboração
BDD tenta aproximar o negócio e criar um entendimento melhor como a aplicação deveria funcionar
Existem vários tipos e níveis de testes, como por exemplo:
testes de unidade
testes de integração
testes ponta a ponta (end-to-end)

Scenario: Breaker guesses a word
  Given the Maker has chosen a word
  When the Breaker makes a guess
  Then the Maker is asked to score

  como usar Exemplos para alimentar o mesmo teste com dados diferentes
como usar DataTables para passar vários dados ao teste de uma vez só
usar o plugin do “Cucumber”