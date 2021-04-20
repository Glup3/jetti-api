# Jetti API

under construction

## Getting Started

### Prerequisites

- nodeJS
- PostgreSQL database

### Installation & Usage

1. Clone or download the repo

   ```
   $ git clone https://github.com/Glup3/jetti-api
   ```

2. Install NPM packages

   ```
   $ npm install
   ```

3. Copy the `.env.example`, rename it to `.env`

   ```
   .env.example --> .env
   ```

4. Set the `DATABASE_URL` and other env vars

   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"

   ...
   ```

5. Migrate database

   ```
   npx prisma migrate dev --preview-feature
   ```

6. Run the server locally on port 4545 (default)

   ```
   $ npm start
   ```

## Prisma

### Generate Types / Client / DBML

```
npx prisma generate
```

### Migrations

#### Create Migration

```
npx prisma migrate dev --name description_of_migration --preview-feature
```

#### Create Migration without executing it

```
npx prisma migrate dev --name description_of_migration --create-only --preview-feature
```

#### Apply Migration Development

```
npx prisma migrate dev --preview-feature
```

#### Apply Migration Production

```
npx prisma migrate deploy
```

#### Reset Migrations

```
npx prisma migrate reset --preview-feature
```

### Seeding

```
npx prisma db seed --preview-feature
```

### Database Diagram

It automatically generates a `schema.dbml` file when `prisma generate` is triggered. The file is located under `prisma/dbml`.
Copy the content to https://dbdiagram.io/d and it will show you the database structure as a diagram.

![Database Diagram Example](/docs/images/database_diagram.png)

## Heroku

**important note**

Prisma generates code in `node_modules/@generated` and Heroku removes it automatically because it thinks that it is a devDependency. Set env `NPM_CONFIG_PRODUCTION` to `false` and it will not prune devDependencies.
