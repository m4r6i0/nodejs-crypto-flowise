const express = require('express');
const CryptoController = require('../controllers/CryptoController');

const router = express.Router();

/**
 * Rota para obter o preço atual do Bitcoin.
 * GET /crypto/price
 */
router.get('/price', CryptoController.getBitcoinPrice);

/**
 * Rota para processar uma pergunta com o Flowise.
 * POST /crypto/question
 */
router.post('/question', CryptoController.processQuestion);

module.exports = router;
