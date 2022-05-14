const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'WorthyWork Web API',
      description: 'opendata-contest project used.',
    },
    host: 'localhost:5000',
    schemes: ['http'],
  };

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
