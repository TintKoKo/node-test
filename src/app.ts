import express from 'express';

const app = express();
const port = 3000;

const abc = 'asdf';

const as = 1;

app.get('/', (req, res) => {
  res.send('Hello World!', abc);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
