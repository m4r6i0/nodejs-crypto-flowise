const axios = require('axios');
const CryptoAPI = require('../../src/infra/integrations/CryptoAPI');

jest.mock('axios');

describe('CryptoAPI', () => {
  beforeAll(() => {
    process.env.CRYPTO_API_URL = 'http://fake-crypto-api.test';
  });

  it('deve retornar o preço do Bitcoin com sucesso', async () => {
    const mockResponse = { data: { bitcoin: { usd: 50000 } } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await CryptoAPI.fetchCryptoPrice('bitcoin', 'usd');
    expect(result).toEqual({
      cryptoId: 'bitcoin',
      currency: 'usd',
      price: 50000,
    });
  });

  it('deve lançar erro se a API CoinGecko não retornar dados', async () => {
    axios.get.mockResolvedValue({});
    await expect(CryptoAPI.fetchCryptoPrice('bitcoin', 'usd')).rejects.toThrow(
      'Resposta inválida da API de criptomoedas.'
    );
  });

  it('deve lançar erro em caso de falha na API', async () => {
    axios.get.mockRejectedValue(new Error('Erro de rede'));
    await expect(CryptoAPI.fetchCryptoPrice('bitcoin', 'usd')).rejects.toThrow(
      'Não foi possível obter o preço da criptomoeda: Erro de rede'
    );
  });
});
