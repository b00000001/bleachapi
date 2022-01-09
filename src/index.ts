import express, { Request, Response } from 'express';
import pageInfo from './scraper/index';
import connection from './db/connection';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello!');
});

connection.connect(() => {
  console.log('Connected to database');
});

app.get('/createDB', async (req: Request, res: Response) => {
  connection.query(`CREATE DATABASE BleachAPI`, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Database created');
  });
  app.get('/characters/:character', async (req: Request, res: Response) => {
    console.log(req.params.character);
    const data = await pageInfo(req.params.character);
    res.json({ data });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
