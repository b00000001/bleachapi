import express, { Request, Response } from 'express';
import fs from 'fs';
import pageInfo from './scraper/index';
import connection from './db/connection';
export const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

// connection.connect(() => {
//   console.log('Connected to database');
// });

app.get('/characters/:character', async (req, res) => {
  const data = await pageInfo(req.params.character);
  res.json(data);
  fs.writeFileSync(
    `${req.params.character}.json`,
    JSON.stringify(data, null, 2),
    'utf8'
  );
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
