# Clone do fluxo de autenticação do Whatsapp Web utilizando QRCode (PoC).

## Intro

Este é um projeto com o intuito de "clonar" o fluxo de autenticação do Whatsapp Web com QRCode utilizando WebSocket para realizar a autenticação em tempo real. Este projeto é um monorepo que contém os seguintes serviços:

 - <b>API (backend)</b> - Rotas de autenticação e sincronização, desenvolvido em NodeJS, Typescript, Socket.IO e Mongodb. 
 - <b>Web (web-whatsapp)</b> - Responsável por gerar o QRCode e ficar ouvindo em um canal do socket, desenvolvido em ReactJS e Socket.IO.
 - <b>Mobile (app-whatsapp)</b> - Responsável por ler o QRCode e acionar a autenticação, desenvolvido em React Native (Expo).

<br />

<br />

## Apresentação
[Apresentação](https://user-images.githubusercontent.com/30129295/189149314-db40ce7a-0335-4388-bc28-19884592220b.mp4)

<br />

## Fluxograma

![fluxo](https://user-images.githubusercontent.com/30129295/189155032-06894151-33b2-4bdb-84e9-62504d19efcf.png)

<br />

---------------------------------------------------

## Instalação

<br />

> **⚠️ Atenção!** É necessário que o seu ambiente de desenvolvimento esteja configurado para trabalhar com docker e docker-compose.

<br />

### Variáveis de ambiente

<br />

Para os projetos (backend e web-whatsapp) crie um arquivo **.env** na raiz de cada projeto, use o arquivo **.env.example** como exemplo.
<br />
<br />
Para o projeto (app-whatsapp) navegue até o arquivo **/app-whatsapp/src/services/api.ts** e altere **<i>baseURL</i>** para o IP da sua máquina.


<br />

### Uso

Siga os comandos abaixo para executar essa aplicação em sua máquina.


#

```bash
# Clonando o repositório da aplicação.

git clone https://github.com/ThompsonMss/authentication-qrcode-whatsapp
```

```bash
# Entrando na pasta da aplicação.

cd authentication-qrcode-whatsapp/
```

```bash
# Comando para iniciar o container da aplicação (Mongodb, Backend e Web) com docker-compose.

docker-compose up -d
```

```bash
# Entrando na pasta do aplicativo em react native.

cd app-whatsapp/
```

```bash
# Comando para instalar o aplicativo.

npx expo start --android # ou --ios
```

<br />

### Pronto! Abra em seu navegador o link abaixo para ter certeza que o serviço está online.
[Link WEB - http://localhost:5173](http://localhost:5173/)

<br />
 
## Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/thompson-silva)

<br>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
