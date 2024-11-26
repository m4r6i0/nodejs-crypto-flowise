const express = require('express');
const config = require('./config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const ErrorHandler = require('./app/middlewares/ErrorHandler');
const cryptoRoutes = require('./app/routes/CryptoRoutes');

console.log('CRYPTO_API_URL:', config.api.cryptoUrl);

const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Rota de documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas de API
app.use('/crypto', cryptoRoutes);

// Middleware de erro (sempre após as rotas)
app.use(ErrorHandler);

// Inicializa o servidor
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger API docs available at http://localhost:${PORT}/api-docs`);
});
