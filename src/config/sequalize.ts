import { Dialect, Sequelize } from 'sequelize';
import { dbConfig } from './db.config';

const env: string = process.env.NODE_ENV || 'development';

// Load db config
const { username, password, database, host, dialect, ENDPOINT_ID } =
  dbConfig[env];

// Create connection
const sequelize = new Sequelize(database as string, username as string, password as string, {
  host: host,
  dialect: dialect as Dialect,
  dialectOptions: {
    options: `project=${ENDPOINT_ID}`,
    ssl: { require: true, rejectUnauthorized: false },
  },
});

export default sequelize;
