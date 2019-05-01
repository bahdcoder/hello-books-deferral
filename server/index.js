const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const consola = require('consola');

dotenv.config();
const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello Books Deferral' });
});

const { PORT } = process.env;
app.listen(PORT, () => {
  consola.success(`server start at port ${PORT}`);
});
