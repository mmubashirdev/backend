# Backend Practice Repository

A Node.js/Express backend practice repository for learning backend development concepts.

## Features

- RESTful API architecture
- CRUD operations (Create, Read, Update, Delete)
- In-memory data storage (for practice)
- Error handling middleware
- Environment configuration
- CORS enabled
- JSON request/response handling

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   └── index.js         # Application entry point
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mmubashirdev/backend.git
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start the server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Available Endpoints

#### Get API Info
```http
GET /
```

#### Get All Items
```http
GET /api/items
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "First sample item",
      "createdAt": "2026-01-29T14:50:00.000Z"
    }
  ]
}
```

#### Get Single Item
```http
GET /api/items/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Item 1",
    "description": "First sample item",
    "createdAt": "2026-01-29T14:50:00.000Z"
  }
}
```

#### Create New Item
```http
POST /api/items
Content-Type: application/json

{
  "name": "New Item",
  "description": "Item description"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "name": "New Item",
    "description": "Item description",
    "createdAt": "2026-01-29T14:50:00.000Z"
  }
}
```

#### Update Item
```http
PUT /api/items/:id
Content-Type: application/json

{
  "name": "Updated Item",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description",
    "createdAt": "2026-01-29T14:50:00.000Z",
    "updatedAt": "2026-01-29T15:00:00.000Z"
  }
}
```

#### Delete Item
```http
DELETE /api/items/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Item deleted successfully"
}
```

## Testing the API

You can test the API using:

### cURL
```bash
# Get all items
curl http://localhost:3000/api/items

# Create new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"Test description"}'

# Get single item
curl http://localhost:3000/api/items/1

# Update item
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"Updated description"}'

# Delete item
curl -X DELETE http://localhost:3000/api/items/1
```

### Postman or Thunder Client
Import the endpoints and test them using a REST client.

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
NODE_ENV=development
```

## Learning Objectives

This repository demonstrates:

1. **Express.js fundamentals** - Server setup, middleware, routing
2. **RESTful API design** - Resource-based URLs, HTTP methods
3. **MVC pattern** - Models, Controllers, Routes separation
4. **Error handling** - Centralized error middleware
5. **Data validation** - Input validation in controllers
6. **Environment configuration** - Using dotenv for config
7. **CORS** - Cross-Origin Resource Sharing setup

## Next Steps

To enhance this project, consider adding:

- Database integration (MongoDB, PostgreSQL, MySQL)
- Authentication & Authorization (JWT, sessions)
- Data validation library (Joi, express-validator)
- Unit and integration tests (Jest, Mocha)
- API documentation (Swagger/OpenAPI)
- Logging (Winston, Morgan)
- Rate limiting
- Pagination and filtering

## License

ISC
