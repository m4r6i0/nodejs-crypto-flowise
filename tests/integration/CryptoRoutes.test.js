const request = require('supertest');
const express = require('express');
const CryptoRoutes = require('../../src/app/routes/CryptoRoutes');

// Configura o app Express para os testes
const app = express();
app.use(express.json());
app.use('/crypto', CryptoRoutes);

describe('CryptoRoutes', () => {
  describe('GET /crypto/price', () => {
    it('deve retornar o preço atual do Bitcoin', async () => {
      // Mock para simular a resposta da camada de integração
      jest.mock('../../src/infra/integrations/CryptoAPI', () => ({
        fetchCryptoPrice: jest.fn().mockResolvedValue({
          cryptoId: 'bitcoin',
          currency: 'usd',
          price: 50000,
        }),
      }));

      const response = await request(app).get('/crypto/price');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Preço do Bitcoin recuperado com sucesso!',
        data: {
          cryptoId: 'bitcoin',
          currency: 'usd',
          price: 50000,
        },
      });
    });

    it('deve retornar erro se a API falhar', async () => {
      jest.mock('../../src/infra/integrations/CryptoAPI', () => ({
        fetchCryptoPrice: jest.fn().mockRejectedValue(new Error('API não disponível')),
      }));

      const response = await request(app).get('/crypto/price');
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Erro ao recuperar o preço do Bitcoin.');
    });
  });

  describe('POST /crypto/question', () => {
    it('deve processar uma pergunta válida com sucesso', async () => {
      // Mock para simular a resposta do FlowiseService
      jest.mock('../../src/infra/services/FlowiseService', () => ({
        processQuestion: jest.fn().mockResolvedValue('Resposta simulada do Flowise.'),
      }));

      const response = await request(app)
        .post('/crypto/question')
        .send({ question: 'Qual é o preço do Bitcoin?' });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Resposta processada com sucesso!',
        data: 'Resposta simulada do Flowise.',
      });
    });

    it('deve retornar erro ao enviar uma pergunta inválida', async () => {
      const response = await request(app).post('/crypto/question').send({});
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Pergunta não fornecida. Por favor, envie uma pergunta válida.');
    });
  });
});
