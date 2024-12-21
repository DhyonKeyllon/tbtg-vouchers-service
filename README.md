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

> Pode ser uma versão atual do docker que esteja estável.

```sh
  docker-compose up -d
```

2. A partir do diretório root do projeto, entre no diretório `./client-service` e instale as dependências necessárias executando o comando `npm install`.

> Lembre de usar a versão do Node v22.10.0 em seu terminal.

```sh
  npm install
```

3. No mesmo diretório `./client-service` execute o comando `npm run prisma:generate` para compilar os types necessários para rodar o prisma.

```sh
  npm run prisma:generate
```

4. Rode o servidor executando o comando `npm run start:dev`, certifique-se que sua porta local `:3000` esteja disponível para uso.

```sh
  npm run start:dev
```

> Você deve receber uma mensagem no terminal informando que o servidor está rodando na sua porta local :3000

5. Agora, novamente vá para o diretório root da aplicação e entre no diretório `./voucher-service` e instale as dependências necessárias executando o comando `npm install`.

```sh
  npm install
```

6. Novamente, no mesmo diretório `./voucher-service` execute o comando `npm run prisma:generate` para compilar os types necessários para rodar o prisma.

```sh
  npm run prisma:generate
```

7. Rode o servidor executando o comando `npm run start:dev`, certifique-se que sua porta local `:3001` esteja disponível para uso.

```sh
  npm run start:dev
```

> Você deve receber uma mensagem no terminal informando que o servidor está rodando na sua porta local :3001

8. Acesse a URL [`localhost:3000/docs`](http://localhost:3000/docs) e a URL [`localhost:3001/docs`](http://localhost:3001/docs) para acessar a documentação das API's.
