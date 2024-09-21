const express = require('express');
const setupSwagger = require('./src/swagger');
const logger = require('./src/logger');
const app = express();
const port = 3001;

setupSwagger(app); // Add API docs route

app.get('/', (req, res) => {
  res.send('Service 1 is running!');
});

app.get('/sayhi', (req, res) => {
  try {
    let name = req.query.name; // Use query parameter
    logger.info(`Name is: ${name}`); // Log the name
    res.send(`Hi, ${name}`);
  } catch (error) {
    logger.error(`Error`, error);
  }
});

app.listen(port, () => {
  logger.info(`Service 1 listening at http://localhost:${port}`);
});
