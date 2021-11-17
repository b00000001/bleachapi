import express, { Request, Response } from 'express';
import pageInfo from './scraper/index';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const data = await pageInfo('Yoruichi');
  res.json({ data });
});

app.get('/data', (req: Request, res: Response) => {
  res.send('Get Data');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
