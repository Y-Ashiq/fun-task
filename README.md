<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Fun Task API

A backend API built with NestJS for managing users and events, featuring scheduled event execution, validation, and robust error handling.

## Technologies Used

- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: Relational database for persistent storage.
- **TypeORM**: ORM for TypeScript/JavaScript, used to prevent SQL injection and simplify database operations.
- **NestJS Scheduling**: Cron jobs for scheduled event execution.
- **Class Validator & Pipes**: Used for request validation and error handling.
- **Swagger**: API documentation available at [http://localhost:3000/api-docs#/](http://localhost:3000/api-docs#/).

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd fun-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your PostgreSQL connection in `src/app.module.ts` if needed.

### Running the App

Start the NestJS server:

```sh
npm run start:dev
```

The API will be available at `http://localhost:3000`.

### API Documentation

Visit [http://localhost:3000/api-docs#/](http://localhost:3000/api-docs#/) for interactive Swagger documentation.

### Running Tests

Run all tests (including e2e):

```sh
npm run test
```

Or for end-to-end tests only:

```sh
npm run test:e2e
```
Or for end-to-end tests only for specific file:

```sh
npm npm run test:e2e user.controller.e2e-spec.ts
```

## Features

- **User Management**: Create users with validated input.
- **Event Scheduling**: Schedule events for users with future execution times.
- **Scheduled Execution**: Cron job runs every 30 seconds to execute pending events.
- **Validation & Error Handling**: DTOs and pipes ensure data integrity and provide clear error messages.
- **Secure Database Access**: TypeORM prevents SQL injection and simplifies queries.

## License

MIT
