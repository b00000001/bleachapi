import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import pageInfo from './scraper/index';
import connection from './db/connection';
export const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

connection.connect(() => {
  console.log('Connected to database');
});

app.get('/characters/:character', async (req, res) => {
  let data;
  if (
    fs.existsSync(
      `${path.join(__dirname, '../../src/json/', req.params.character)}.json`
    )
  ) {
    connection.query(
      `SELECT * from bleachapi.bleachchars WHERE title LIKE '%${req.params.character}%'`,
      (err, result) => {
        if (err) {
          throw err;
        } else {
          res.json(result);
        }
      }
    );
  } else {
    data = await pageInfo(req.params.character);
    fs.writeFileSync(
      `${path.join(__dirname, '../../src/json/', req.params.character)}.json`,
      JSON.stringify([data], null, 2)
    );
    res.json(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
