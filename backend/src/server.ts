import app from './app';
import { pool } from './db/pool';
import { config } from './config/env';

const startServer = async () => {
  try {
    // testing database connection before accepting HTTP traffic
    try {
      const client = await pool.connect();
      console.log('Connected to PostgreSQL database');
      client.release();
    } catch (dbError) {
      console.warn('⚠️ Could not connect to database. Is Postgres running?');
      console.warn(dbError instanceof Error ? dbError.message : String(dbError));
    }

    //Starts the Express server
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port} in ${config.env} mode`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
};

startServer();