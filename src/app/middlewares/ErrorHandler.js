/**
 * Middleware para tratar erros globais na aplicação.
 * @param {Error} err - O erro capturado.
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @param {Function} next - Próximo middleware.
 */
const ErrorHandler = (err, req, res, next) => {
    console.error('Erro capturado:', err.message);
  
    const statusCode = err.statusCode || 500;
    const errorResponse = {
      message: err.message || 'Erro interno do servidor.',
      details: err.details || null,
    };
  
    res.status(statusCode).json(errorResponse);
  };
  
  module.exports = ErrorHandler;
  