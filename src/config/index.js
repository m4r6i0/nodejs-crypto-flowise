const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

/**
 * Configurações gerais da aplicação.
 */
const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  api: {
    cryptoUrl: process.env.CRYPTO_API_URL || 'https://api.coingecko.com/api/v3',
    flowiseUrl: process.env.FLOWISE_API_URL || 'http://localhost:3001/api/flow',
  },
};

module.exports = config;
