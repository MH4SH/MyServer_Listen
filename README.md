  ![MyServerListen][listen-image]

  ## Listen para comunicação com servidor node usando PM2
  ---
  [![AGPL-3.0][license-image]][license-link]

  Este projeto é o responsável por escutar o os processos e se comunicar com os clientes.
  Alem deste listen temos outros 4 projetos:
  - [Server Central - _Ainda não iniciado_](/)
  - [Client Desktop](https://github.com/MH4SH/MyServer/tree/develop/packages/desktop)
  - [Client Mobile - _Ainda não iniciado_](/)
  - [Client Web](https://github.com/MH4SH/MyServer/tree/develop/packages/client)

  Abaixo vamos tudo sobre o nosso projeto para **frontend / desktop**.

  ## :rocket: Tecnologias

  - Main Libs
    - [![socket.io (latest)](https://img.shields.io/npm/v/socket.io/latest?label=Socket.io&style=flat-square)][socket-io] | Usado para se comunicar com o client com envios de mensagens via websocket, para facilitar a monitoração dos processos.
    - [![typescript (latest)](https://img.shields.io/npm/v/typescript/latest?label=Typescript&style=flat-square)][typescript] | Todo o projeto é desenvolvido em typescript.
    - [![pm2 (latest)](https://img.shields.io/npm/v/pm2/latest?label=PM2&style=flat-square)][pm2] | Pacote responsável pela mágica de manter tudo ativo e a manutenção dos processos.


  ## :minidisc: Descrição
  Esta versão do projeto é responsável por controlar diretamente os processos, de efetuar as atualizações e iniciar novos processos em um servidor que utiliza o PM2.

  ## :computer: Instalação
  Em breve teremos processo de instalação deste listen em seu repositório.

  ****
  Esse projeto está sob a licença GPL 3.0. Veja o arquivo [LICENSE][license-link] para mais detalhes.


  <!-- Markdown link & img dfn's -->
  [listen-image]: https://i.ibb.co/fvpvx93/Database-1.png
  [license-image]: https://img.shields.io/badge/License-GPL%203.0-yellow.svg
  [license-link]: /LICENSE
  [repo-backedn]: https://github.com/marconwillian/BeTheHero_backend
  [repo-mobile]: https://github.com/marconwillian/BeTheHero_mobile
  [typescript]: https://yarnpkg.com/package/typescript
  [socket-io]: https://yarnpkg.com/package/socket.io
  [pm2]: https://yarnpkg.com/package/pm2
  [npm-react-router-dom]: https://yarnpkg.com/package/react-router-dom
  [npm-axios]: https://yarnpkg.com/package/axios
