# TBTG - Bilheteria

## Sobre o projeto

Sistema de vouchers para clientes

### Recursos usados

- [Typescript](https://www.typescriptlang.org/)
- [Nest.js](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)

## Iniciando o Projeto

### Pré-requisitos

Docker Desktop

- [Docker](https://www.docker.com/)

docker-compose v2 (Vem por padrão com o Docker atualmente)

- [docker-compose](https://docs.docker.com/compose/cli-command/)

Node.js v22.10.0 ou acima

- [Node.js](https://nodejs.org/)

### Instalação

1. Primeiro, execute `docker-compose up -d` e aguarde a criação do container para o postgres.

```bash
  # run postgres database container
  $ docker-compose up -d
```

2. A partir do diretório root do projeto, entre no diretório `./client-service` e instale as dependências necessárias executando o comando `npm install`.

```bash
  # install deps
  $ npm install
```

- 2.1. Crie um arquivo `.env` e coloque as mesmas envs e valores do arquivo `.env.example`.

- 2.2. No mesmo diretório `./client-service` execute o comando `npm run prisma:generate` para compilar os types necessários para rodar o prisma.

```bash
  # prisma generate
  $ npm run prisma:generate
```

- 2.3. Rode o servidor executando o comando `npm run start:dev`, certifique-se que sua porta local `:3000` esteja disponível para uso.

```bash
  # run server
  $ npm run start:dev
```

> Você pode rodar os testes de exemplo no `/client-service` executando `npm run test:example`.

3. Agora, inicie uma nova instância do seu terminal. Vá para o diretório do projeto e então entre no diretório `./voucher-service` e instale as dependências necessárias executando o comando `npm install`.

```bash
  # install deps
  $ npm install
```

- 3.1. Crie um arquivo `.env` e coloque as mesmas envs e valores do arquivo `.env.example`.

- 3.2. Novamente, no mesmo diretório `./voucher-service` execute o comando `npm run prisma:generate` para compilar os types necessários para rodar o prisma.

```bash
  # prisma generate
  $ npm run prisma:generate
```

- 3.3. Rode o servidor executando o comando `npm run start:dev`, certifique-se que sua porta local `:3001` esteja disponível para uso.

```bash
  # run server
  $ npm run start:dev
```

4. Acesse a URL [`localhost:3000/docs`](http://localhost:3000/docs) e a URL [`localhost:3001/docs`](http://localhost:3001/docs) para acessar a documentação das API's.
