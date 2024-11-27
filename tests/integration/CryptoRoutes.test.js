const request = require('supertest');
const express = require('express');
const CryptoRoutes = require('../../src/app/routes/CryptoRoutes');
const CryptoAPI = require('../../src/infra/integrations/CryptoAPI');
const FlowiseService = require('../../src/infra/services/FlowiseService');

// Configura o app Express para os testes
const app = express();
app.use(express.json());
app.use('/crypto', CryptoRoutes);

jest.mock('../../src/infra/integrations/CryptoAPI');
jest.mock('../../src/infra/services/FlowiseService');

describe('CryptoRoutes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /crypto/price', () => {
    it('deve retornar o preço atual do Bitcoin', async () => {
      // Simula a resposta da API
      CryptoAPI.fetchCryptoPrice.mockResolvedValue({
        cryptoId: 'bitcoin',
        currency: 'usd',
        price: 50000,
      });

      const response = await request(app).get('/crypto/price');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Preço do Bitcoin recuperado com sucesso!');
      expect(response.body.data).toEqual({
        cryptoId: 'bitcoin',
        currency: 'usd',
        price: 50000,
      });
    });

    it('deve retornar erro se a API falhar', async () => {
      CryptoAPI.fetchCryptoPrice.mockRejectedValue(new Error('API não disponível'));

      const response = await request(app).get('/crypto/price');
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Erro ao recuperar o preço do Bitcoin.');
    });
  });

  describe('POST /crypto/question', () => {
    it('deve processar uma pergunta válida com sucesso', async () => {
      // Simula a resposta do Flowise
      FlowiseService.processQuestion.mockResolvedValue({
        text: 'Resposta simulada do Flowise.',
        question: 'Qual é o preço do Bitcoin?',
        chatId: '12345',
        chatMessageId: '67890',
      });

      const response = await request(app)
        .post('/crypto/question')
        .send({ question: 'Qual é o preço do Bitcoin?' });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Resposta processada com sucesso!');
      expect(response.body.data).toHaveProperty('text', 'Resposta simulada do Flowise.');
      expect(response.body.data).toHaveProperty('question', 'Qual é o preço do Bitcoin?');
    });

    it('deve retornar erro ao enviar uma pergunta inválida', async () => {
      const response = await request(app).post('/crypto/question').send({});
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        'message',
        'Pergunta não fornecida. Por favor, envie uma pergunta válida.'
      );
    });
  });
});
