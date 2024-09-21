const express = require('express');
const setupSwagger = require('./src/swagger');
const logger = require('./src/logger');
const app = express();
const port = 3002;

setupSwagger(app); // Add API docs route

app.get('/', (req, res) => {
  logger.info('Called service 2');
  res.send('Service 2 is running!');
});

app.listen(port, () => {
  logger.info(`Service 2 listening at http://localhost:${port}`);
});
