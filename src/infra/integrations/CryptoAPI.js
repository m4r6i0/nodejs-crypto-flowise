const axios = require('axios');
const { CRYPTO_API_URL } = process.env;

/**
 * Serviço para interagir com APIs de mercado de criptomoedas.
 */
class CryptoAPI {
  /**
   * Obtém o preço atual de uma criptomoeda em uma moeda específica.
   * @param {string} cryptoId - O identificador da criptomoeda (ex.: "bitcoin").
   * @param {string} currency - O código da moeda (ex.: "usd").
   * @returns {Promise<Object>} - Um objeto contendo o preço atual da criptomoeda.
   */
  static async fetchCryptoPrice(cryptoId, currency) {
    try {
      const url = `${CRYPTO_API_URL}/simple/price`;
      const response = await axios.get(url, {
        params: {
          ids: cryptoId,
          vs_currencies: currency,
        },
      });

      if (response.data && response.data[cryptoId] && response.data[cryptoId][currency]) {
        return {
          cryptoId,
          currency,
          price: response.data[cryptoId][currency],
        };
      }

      throw new Error('Resposta inválida da API de criptomoedas.');
    } catch (error) {
      console.error(`Erro ao buscar preço da criptomoeda ${cryptoId}:`, error.message);
      throw new Error(`Não foi possível obter o preço da criptomoeda: ${error.message}`);
    }
  }
}

module.exports = CryptoAPI;
