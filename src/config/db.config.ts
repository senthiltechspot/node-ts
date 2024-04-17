export interface DbConfig {
  [key: string]: {
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    host: string | undefined;
    dialect: string;
    ENDPOINT_ID: string | undefined;
  };
}

export const dbConfig: DbConfig = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ENDPOINT_ID: process.env.ENDPOINT_ID,
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ENDPOINT_ID: process.env.ENDPOINT_ID,
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ENDPOINT_ID: process.env.ENDPOINT_ID,
  },
};
