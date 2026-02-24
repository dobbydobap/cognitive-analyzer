import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//global Middlewares
app.use(cors());
app.use(express.json());// Parses incoming JSON payloads

//health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Cognitive Productivity Analyzer API'
  });
});
export default app;