// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from Node.js backend!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Node.js backend listening at http://localhost:${port}`);
});
