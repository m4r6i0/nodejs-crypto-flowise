const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Arquivo Swagger em formato JSON
const ErrorHandler = require('./src/app/middlewares/ErrorHandler');
const cryptoRoutes = require('./src/app/routes/CryptoRoutes');

dotenv.config();

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger API docs available at http://localhost:${PORT}/api-docs`);
});
