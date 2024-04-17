# Node.js with TypeScript App

This is a Node.js application built using TypeScript.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/senthiltechspot/node-ts
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=5000
   PGHOST='your-host-url'
   PGDATABASE='your-database-name'
   PGUSER='your-database-username'
   PGPASSWORD='your-database-password'
   ENDPOINT_ID='your-endpoint-id'
   ```

## Scripts

- `npm run dev`: Run the development server with hot-reloading using `nodemon` and `ts-node`.
- `npm start`: Build the TypeScript code and start the server.
- `npm run build`: Build the TypeScript code.
- `npm test`: Run tests using Jest.

## API Routes

### Get all applicants

`GET http://localhost:5000/awesome/applicant/`

### Get an applicant by ID

`GET http://localhost:5000/awesome/applicant/1`

### Create a new applicant

`POST http://localhost:5000/awesome/applicant/`

#### Request Body

    ```json
    {
    "firstName": "Senthil",
    "lastName": "Kumar",
    "email": "senthilkumarp.dev@gmail.com",
    "phoneNumber": 123456789
    }
    ```

#### Update an applicant by ID

`PUT http://localhost:5000/awesome/applicant/1`

    ```json
    {
    "firstName": "UpdatedFirstName",
    "lastName": "UpdatedLastName",
    "email": "updated.email@example.com",
    "phoneNumber": 987654321
    }
    ```

#### Delete an applicant by ID

`DELETE http://localhost:5000/awesome/applicant/1`

Note: Replace http://localhost:5000 with your actual server URL.


Remember to replace placeholders like `your-username`, `your-repo`, `your-host-url`, `your-database-name`, `your-database-username`, `your-database-password`, `your-endpoint-id`, and adjust URLs accordingly based on your actual setup.
