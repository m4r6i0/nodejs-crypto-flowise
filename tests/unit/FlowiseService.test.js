const FlowiseService = require('../../src/infra/services/FlowiseService');

jest.mock('../../src/infra/services/FlowiseService', () => ({
  processQuestion: jest.fn(),
}));

describe('FlowiseService', () => {
  it('deve retornar apenas o campo "text" da resposta do Flowise', async () => {
    FlowiseService.processQuestion.mockResolvedValue({
      text: 'Resposta simulada do Flowise.',
    });

    const result = await FlowiseService.processQuestion('Qual é o preço do Bitcoin?');
    expect(result.text).toBe('Resposta simulada do Flowise.');
  });

  it('deve lançar erro se o Flowise não retornar o campo "text"', async () => {
    FlowiseService.processQuestion.mockRejectedValue(
      new Error('Resposta inválida do Flowise.')
    );

    await expect(FlowiseService.processQuestion('Qual é o preço do Bitcoin?')).rejects.toThrow(
      'Resposta inválida do Flowise.'
    );
  });
});
