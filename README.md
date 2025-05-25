# 🎵 Music API

A RESTful API for managing music information built with NestJS.

## 🚀 Features

- CRUD operations for music entries
- Input validation using class-validator
- Comprehensive test coverage (unit tests and e2e tests)
- Type safety with TypeScript

## 🛠️ Tech Stack

- NestJS
- TypeScript
- Jest (Testing)
- class-validator & class-transformer

## 📋 API Endpoints

| Method | Endpoint     | Description                |
|--------|-------------|----------------------------|
| GET    | /           | Welcome message            |
| GET    | /musics     | Get all music entries      |
| GET    | /musics/:id | Get a specific music entry |
| POST   | /musics     | Create a new music entry   |
| PATCH  | /musics/:id | Update a music entry       |
| DELETE | /musics/:id | Delete a music entry       |

## 🏗️ Project Structure

```
src/
├── musics/
│   ├── dto/
│   │   ├── create-music.dto.ts
│   │   └── update-music.dto.ts
│   ├── entities/
│   │   └── music.entity.ts
│   ├── musics.controller.ts
│   ├── musics.service.ts
│   └── musics.module.ts
├── app.controller.ts
├── app.module.ts
└── main.ts
```

## 💻 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run start:dev
```

3. The API will be available at `http://localhost:3000`

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📝 Music Entity Structure

```typescript
{
  id: number;
  title: string;
  year: number;
  artists: string[];
}
```

## 🔒 Validation

The API implements validation using class-validator with the following rules:
- Title: Required string
- Year: Required number
- Artists: Optional array of strings

## 👨‍💻 Development

The project uses the following development tools:
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- TypeScript for type safety

## 📄 License

This project is licensed under the MIT License.
