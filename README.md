<h1 align="center">🚀 Go Finances API 💰</h1>

<div align="center">
    <p>Backend of GoFinances!</p>
    <p>This project is the resolution of the Challenge 06 from Rocketseat's GoStack Bootcamp.</p>
</div>

## Links 🔗

- Challenge 06: https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload
- Front-end Web: 

## Techs 💻

- **NodeJS** - A platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
- **Typescript** - An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- **TypeORM** - An ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript.
- **Jest** - A JavaScript library for unit/integration testing implementation.

## Tools ⚙️

- **Docker** - Provides the ability to package and run an application in a loosely isolated environment called a container.
- **DBeaver** - A SQL client software application and a database administration tool.

## Getting Started 🚀

### Requirements

1. Install `Docker`.
2. Install `Docker Compose`.
3. Install `DBeaver`.

### Run Docker

1. Run `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:12`.
2. Run `docker start gostack_postgres`.

### Create Database

1. In your DBeaver, create a database called `gostack_desafio06`.
2. In your DBeaver, create a database called `gostack_desafio06_tests`.

### Run Tests

1. Run `yarn` to install project dependecies.
2. Run `yarn test` to run all the implemented tests.

### Run Application

1. Run `yarn` to install project dependecies.
2. Run `yarn dev:server` to run the application in the development mode.
3. Your API will be running on [http://localhost:3333](http://localhost:3333)

## License 📃

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
