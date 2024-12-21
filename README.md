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

> Lembre de usar a versão do Node v22.10.0 em seu terminal.

1. A partir do diretório root do projeto, entre no diretório `./client-service` e instale as dependências necessárias executando o comando `npm install`.

```sh
  npm install
```

2. Agora, novamente vá para o diretório root da aplicação e entre no diretório `./voucher-service` e instale as dependências necessárias executando o comando `npm install`.

```sh
  npm install
```

3. Execute `docker-compose up -d` e aguarde a criação dos containers com o docker para rodar a aplicação.

```sh
  docker-compose up -d
```

4. Acesse a URL [`localhost:3000`](http://localhost:3000/docs) e a URL [`localhost:3001`](http://localhost:3001/docs) para acessar a documentação das API's.
