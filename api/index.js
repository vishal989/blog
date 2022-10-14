import express from 'express';

const app = express();

app.use(express.json()); // api

app.get('/test', (req, res) => {
  res.json('IT works!');
});

app.listen(8800, () => {
  console.log('Connected!');  
});
