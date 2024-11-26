const CryptoAPI = require('../../infra/integrations/CryptoAPI');
const CryptoPrice = require('../models/CryptoPrice');

/**
 * Caso de uso para buscar o preço de uma criptomoeda.
 */
class FetchCryptoPrice {
  /**
   * Executa o caso de uso para buscar o preço atual de uma criptomoeda.
   * @param {string} cryptoId - O identificador da criptomoeda (ex.: "bitcoin").
   * @param {string} currency - A moeda de referência (ex.: "usd").
   * @returns {Promise<CryptoPrice>} - Uma instância do modelo CryptoPrice.
   */
  static async execute(cryptoId, currency) {
    try {
      // Obtém os dados da API externa
      const priceData = await CryptoAPI.fetchCryptoPrice(cryptoId, currency);

      // Cria uma instância do modelo CryptoPrice com os dados retornados
      return new CryptoPrice(priceData.cryptoId, priceData.currency, priceData.price);
    } catch (error) {
      console.error('Erro no caso de uso FetchCryptoPrice:', error.message);
      throw new Error(`Não foi possível obter o preço da criptomoeda: ${error.message}`);
    }
  }
}

module.exports = FetchCryptoPrice;
