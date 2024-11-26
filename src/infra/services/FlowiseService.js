const axios = require('axios');
const config = require('../../config');

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
      const response = await axios.post(`${config.api.flowiseUrl}`, {
        question,
      });

      // Verifica se a resposta contém o texto esperado
      if (response.data && response.data.text) {
        return {
          text: response.data.text, // Resposta do Flowise
          question: response.data.question, // Pergunta enviada
          chatId: response.data.chatId, // ID do chat (opcional)
          chatMessageId: response.data.chatMessageId, // ID da mensagem no chat (opcional)
        };
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
