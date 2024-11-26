const axios = require('axios');
const { FLOWISE_API_URL } = process.env;

/**
 * Serviço responsável por interagir com o Flowise.
 */
class FlowiseService {
  /**
   * Envia uma pergunta ao Flowise para processamento.
   * @param {string} question - A pergunta enviada pelo usuário.
   * @returns {Promise<Object>} - A resposta processada pelo Flowise.
   */
  static async processQuestion(question) {
    try {
      const response = await axios.post(`${FLOWISE_API_URL}`, {
        question,
      });

      if (response.data && response.data.answer) {
        return response.data.answer;
      }

      throw new Error('Resposta inválida do Flowise.');
    } catch (error) {
      console.error('Erro ao interagir com o Flowise:', error.message);
      throw new Error(
        `Não foi possível processar a pergunta: ${error.message}`
      );
    }
  }
}

module.exports = FlowiseService;
