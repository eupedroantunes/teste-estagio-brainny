# Teste de Estágio da Brainny - Desafio 01

A aplicação foi criada em Javascript.
Para o desenvolvimento dela foi utilizada a biblioteca Faker.js, um dos requisitos para população de array com registro de dados. Além dessa biblioteca foram usadas outras duas: Moment.js para trabalhar com calculos de datas geradas pelo Faker.js e também o Prompt-Sync para interação com a aplicação desenvolvida.

# Processo de criação
Primeiramente foi gerado o arquivo package.json.

Depois a primeira biblioteca a ser instalada foi o próprio Faker.js (npm install @faker-js/faker --save-dev).

A instalação da biblioteca Moment.js pode ser feita atráves do comando (npm install moment --save)

Além da instalação do Prompt-Sync com (npm i @types/prompt-sync) para a aplicação ser rodada atráves do terminal.

# Projeto
O projeto conta com quatro arquivos diferentes em Javascript.

O arquivo executável para que o programa funcione é o **_Main.js_**.

Através dele são executadas todas as outras ações referentes aos outros arquivos.

Explicação de cada arquivo: no _Clients.js_ são gerados os dados de população do array de clientes através do laço de repetição _for_.

No arquivo _app.js_ foram criados os filtros para busca dentro do array de clientes. Também foi o local onde foi utilizada a biblioteca Moment.js para fins de cálculos de datas.

O arquivo _SubMenu.js_ conta com os filtros sendo utilizados para busca em cada uma das duas categorias definidas: Clientes e Compras.

# Dificuldades
Trabalhar com cálculo de datas foi um quebra-cabeça que consegui finalizar quando achei por solução utilizar a biblioteca anteriomente citada.

Em alguns momentos de geração de relátorios de clientes e compras ao final aparece um **_undefined_** que não consegui solucionar.

# Mensagem final
Qualquer dúvida, crítica e sugestão será muito bem-vinda e estou a disposição para conversa.

Muito Obrigado, 
Pedro Antunes
