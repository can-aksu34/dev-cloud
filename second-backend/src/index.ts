// src/index.ts
import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  // Handle the uploaded image here (req.file.buffer contains the image data).
  const response = { message: 'Image received and processed.' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Another backend listening at http://localhost:${port}`);
});
