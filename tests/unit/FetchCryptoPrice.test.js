const FetchCryptoPrice = require('../../src/core/useCases/FetchCryptoPrice');
const CryptoAPI = require('../../src/infra/integrations/CryptoAPI');
const CryptoPrice = require('../../src/core/models/CryptoPrice');

jest.mock('../../src/infra/integrations/CryptoAPI');

describe('FetchCryptoPrice', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  it('deve retornar uma instância de CryptoPrice com os dados corretos', async () => {
    // Mock para simular a resposta da API
    CryptoAPI.fetchCryptoPrice.mockResolvedValue({
      cryptoId: 'bitcoin',
      currency: 'usd',
      price: 50000,
    });

    const cryptoPrice = await FetchCryptoPrice.execute('bitcoin', 'usd');

    expect(cryptoPrice).toBeInstanceOf(CryptoPrice);
    expect(cryptoPrice.cryptoId).toBe('bitcoin');
    expect(cryptoPrice.currency).toBe('usd');
    expect(cryptoPrice.price).toBe(50000);
  });

  it('deve lançar um erro quando a API falhar', async () => {
    // Mock para simular uma falha na API
    CryptoAPI.fetchCryptoPrice.mockRejectedValue(new Error('API não disponível'));

    await expect(FetchCryptoPrice.execute('bitcoin', 'usd')).rejects.toThrow(
      'Não foi possível obter o preço da criptomoeda: API não disponível'
    );
  });

  it('deve chamar CryptoAPI com os parâmetros corretos', async () => {
    // Mock para simular a resposta da API
    CryptoAPI.fetchCryptoPrice.mockResolvedValue({
      cryptoId: 'bitcoin',
      currency: 'usd',
      price: 50000,
    });

    await FetchCryptoPrice.execute('bitcoin', 'usd');

    expect(CryptoAPI.fetchCryptoPrice).toHaveBeenCalledTimes(1);
    expect(CryptoAPI.fetchCryptoPrice).toHaveBeenCalledWith('bitcoin', 'usd');
  });
});
