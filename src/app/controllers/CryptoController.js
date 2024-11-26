const FlowiseService = require('../../infra/services/FlowiseService');
const CryptoAPI = require('../../infra/integrations/CryptoAPI');

/**
 * Controlador para interagir com dados de criptomoedas.
 */
class CryptoController {
  /**
   * Obtém o preço atual do Bitcoin.
   * @param {Request} req - Objeto de requisição do Express.
   * @param {Response} res - Objeto de resposta do Express.
   */
  static async getBitcoinPrice(req, res) {
    try {
      const priceData = await CryptoAPI.fetchCryptoPrice('bitcoin', 'usd');
      res.status(200).json({
        message: 'Preço do Bitcoin recuperado com sucesso!',
        data: priceData,
      });
    } catch (error) {
      console.error('Erro ao obter preço do Bitcoin:', error.message);
      res.status(500).json({
        message: 'Erro ao recuperar o preço do Bitcoin.',
        error: error.message,
      });
    }
  }

  /**
   * Processa uma pergunta utilizando o Flowise.
   * @param {Request} req - Objeto de requisição do Express.
   * @param {Response} res - Objeto de resposta do Express.
   */
  static async processQuestion(req, res) {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: 'Pergunta não fornecida. Por favor, envie uma pergunta válida.',
      });
    }

    try {
      const response = await FlowiseService.processQuestion(question);
      res.status(200).json({
        message: 'Resposta processada com sucesso!',
        data: response,
      });
    } catch (error) {
      console.error('Erro ao processar pergunta com Flowise:', error.message);
      res.status(500).json({
        message: 'Erro ao processar a pergunta.',
        error: error.message,
      });
    }
  }
}

module.exports = CryptoController;
