const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const consola = require('consola');
const swagger = require('swagger-ui-express');
const swaggerDocument = require('../swagger');

dotenv.config();
const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello Books Deferral' });
});
/**
 *  setup Swagger
 */
app.use(
  "/api-docs",
  swagger.serve,
  swagger.setup(swaggerDocument, { explorer: true })
);

const { PORT } = process.env;
app.listen(PORT, () => {
  consola.success(`server start at port ${PORT}`);
});
