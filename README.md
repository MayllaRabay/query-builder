<h1 align="center">
  <img alt="Create, innovate, inspire, code and test like a girl!" title="#MeuBanner" src="./banner.png" />
</h1>

<h2 align="center"> 
	🚧 Exercício Query Builder 🚀 em andamento... 🚧
</h2>

## 💻 Sobre o projeto
 Criar uma RESTful API com CRUD de usuários e produtos. Em suas respectivas querys, utilizar Query Build com o [Knex.js](https://knexjs.org/#Installation) e para as rotas de cadastro, deverá retornar um objeto com o registro criado contendo todos os campos da tabela.

## 💡 Pré-requisitos
 - O primeiro passo é instalar o [**Git**](https://git-scm.com) em seu computador caso você ainda não o tenha. 
 - Os pacotes que iremos utilizar durante o desenvolvimento desse projeto serão gerenciados pelo **Node Package Manager** (NPM), então precisaremos instalá-lo. Vamos até o site oficial do [**Node.js**](https://nodejs.org/en/) para instalar sua versão LTS. Quando instalamos o Node.js, o **NPM** também é instalado no computador como parte do mesmo pacote.
 - Além disto é interessante ter um bom editor para trabalhar com o código como por exemplo o [**VSCode**](https://code.visualstudio.com/download), o aplicativo [**Insomnia**](https://insomnia.rest/pricing) para testar nossas requisições HTTP com mais facilidade e o [**Beekeeper Studio**](https://www.beekeeperstudio.io/) para gerir nosso banco de dados e tabelas.

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/MayllaRabay/query-builder

# Acesse a pasta do projeto no seu terminal/cmd
$ cd query-builder

# Instale o NPM caso não tenha baixado o Node.js
$ npm install

# Instale o framework Express, o query builder Knex.js e Node Postgres para se conectar ao banco de dados
$ npm i express knex pg

# Instale a ferramenta Nodemon em modo de desenvolvimento
$ npm i -D nodemon

# Execute a aplicação em modo de desenvolvimento
$ npx nodemon

# A aplicação será aberta na porta:3000 - acesse em seu navegador
http://localhost:3000
```

## :warning: Importante
Para a conexão com a API e o banco de dados funcionar, entre no arquivo **connection.js** e modifique o nome do usuário, senha e banco de dados de acordo com o que foi criado em seu computador, pelo Beekeeper ou qualquer outro gerenciador de database.

## 🛠 Tecnologias
  - ![Node.js](https://img.shields.io/badge/-Node.js-green)
  - ![API Rest](https://img.shields.io/badge/-API%20Rest-purple)

## :bowtie: Autor
<a href="https://github.com/mayllarabay/">
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/68441361?v=4" 
 width="100px" alt="" />
</a>

Feito com ❤️ por Maylla Rabay 👋 [Entre em contato!](https://www.linkedin.com/in/mayllarabay/)