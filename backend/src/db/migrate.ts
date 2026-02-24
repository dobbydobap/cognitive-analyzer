import fs from 'fs';
import path from 'path';
import { pool } from './pool';

const runMigrations = async () => {
  console.log('Starting database migrations...');
  
  try {
    //Reads the SQL file
    const sqlFilePath = path.join(__dirname, '../../database/001_initial_schema.sql');
    const sql = fs.readFileSync(sqlFilePath, 'utf8');

    //Executes the SQL
    const client = await pool.connect();
    await client.query(sql);
    client.release();

    console.log('Migrations executed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await pool.end();
  }
};

runMigrations();