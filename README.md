# Fun Task API

A backend API built with NestJS for managing users and events, featuring scheduled event execution, validation, and robust error handling.

## Technologies Used

- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: Relational database for persistent storage.
- **TypeORM**: ORM for TypeScript/JavaScript, used to prevent SQL injection and simplify database operations.
- **NestJS Scheduling**: Cron jobs for scheduled event execution.
- **Class Validator & Pipes**: Used for request validation and error handling.
- **Swagger**: API documentation available at [http://localhost:3000/api-docs#/](http://localhost:3000/api-docs#/).

## File Structure

```
fun-task/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── models/  //models and entities for user and event database
│   │   ├── events.model.ts
│   │   └── users.model.ts
│   ├── events/  //handle the event services (add event and excute event)
│   │   ├── events.controller.ts
│   │   ├── events.module.ts
│   │   ├── events.service.ts
│   │   ├── execute_event.service.ts
│   │   ├── dto/
│   │   │   └── events.dto.ts
│   └── users/   //handle the user services (add user and get user's events)
│       ├── users.controller.ts
│       ├── users.module.ts
│       ├── users.service.ts
│       ├── dto/
│       │   └── user.dto.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── event/
│   │   └── event.controller.e2e-spec.ts
│   └── user/
│       └── user.controller.e2e-spec.ts
├
```

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
