const dotenv = require('dotenv');
const path = require('path');

// Determinar o caminho correto do .env.test
const envPath = path.resolve(__dirname, '.env.test');

// Carregar variáveis do .env.test
dotenv.config({ path: envPath });

console.log('Configuração de ambiente carregada para testes:');
console.log('CRYPTO_API_URL:', process.env.CRYPTO_API_URL);
console.log('FLOWISE_API_URL:', process.env.FLOWISE_API_URL);
