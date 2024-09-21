const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Service 2 API',
    version: '1.0.0',
    description: 'API documentation for Service 2',
  },
  servers: [
    {
      url: 'http://localhost:3002',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./server.js'], // files containing annotations for the API
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
