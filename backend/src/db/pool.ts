import { Pool } from 'pg';
import { config } from '../config/env';

//initialize the PostgreSQL connection pool
export const pool = new Pool({
  connectionString: config.dbUrl,
  max: 20, //maximum number of clients in the pool
  idleTimeoutMillis: 30000, //close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, //fail if connection takes longer than 2 seconds
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle database client', err);
  process.exit(-1);
});