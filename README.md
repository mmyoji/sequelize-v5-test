# sequelize v5 test repo

## Prerequisite

- Node.js v16.x
- Docker

## Development

```sh
$ npm install

# Start Database (MySQL 5.7 through Docker)
$ npm run db:start

# Create database (if not exists)
$ npm run db:create

# Run migration
$ npm run db:migrate

# Start MySQL client
$ npm run db:console

# Stop Database
$ npm run db:stop
```
