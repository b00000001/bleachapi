import express, { Request, Response } from 'express';
import pageInfo from './scraper/index';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello!');
});

app.get('/characters/:character', async (req: Request, res: Response) => {
  const data = await pageInfo(req.params.character);
  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
