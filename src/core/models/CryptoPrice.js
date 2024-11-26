/**
 * Classe representando o preço de uma criptomoeda.
 */
class CryptoPrice {
    /**
     * Cria uma nova instância de CryptoPrice.
     * @param {string} cryptoId - O identificador da criptomoeda (ex.: "bitcoin").
     * @param {string} currency - A moeda de referência (ex.: "usd").
     * @param {number} price - O preço atual da criptomoeda na moeda de referência.
     */
    constructor(cryptoId, currency, price) {
      this.cryptoId = cryptoId;
      this.currency = currency;
      this.price = price;
    }
  
    /**
     * Retorna uma descrição formatada do preço da criptomoeda.
     * @returns {string} - Uma string descritiva do preço.
     */
    getDescription() {
      return `O preço atual de ${this.cryptoId} é ${this.price} ${this.currency.toUpperCase()}.`;
    }
  }
  
  module.exports = CryptoPrice;
  