# 🌟 Node.js Crypto Flowise 🌟

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-UI-orange)](https://swagger.io/)
[![Jest](https://img.shields.io/badge/Tests-Jest%20Coverage-brightgreen)](https://jestjs.io/)

Uma aplicação Node.js robusta que integra a API de criptomoedas (CoinGecko) e o **Flowise** para processamento de linguagem natural (NLP). Este projeto utiliza boas práticas de arquitetura (Clean Architecture) e está documentado com **Swagger** para facilitar o uso.

---

## 🚀 **Funcionalidades**
- Obter o preço atual do Bitcoin em várias moedas.
- Processar perguntas interativas relacionadas a criptomoedas com **Flowise**.
- Código estruturado seguindo **Clean Architecture** e **Clean Code**.
- Testes de integração e unitários com **Jest** e **Supertest**.

---

## 🛠 **Tecnologias Utilizadas**
| Tecnologia | Logotipo |
|------------|----------|
| **Node.js** | ![Node.js](https://img.shields.io/badge/Node.js-18-green) |
| **Express.js** | ![Express](https://img.shields.io/badge/Express-4.18.2-blue) |
| **Flowise** | ![Flowise](https://img.shields.io/badge/Flowise-NLP-yellow) |
| **Swagger** | ![Swagger](https://img.shields.io/badge/Swagger-UI-orange) |
| **Jest** | ![Jest](https://img.shields.io/badge/Jest-Test-brightgreen) |
| **Supertest** | ![Supertest](https://img.shields.io/badge/Supertest-Integration-green) |

---

## 📁 **Estrutura do Projeto**
```plaintext
nodejs-crypto-flowise/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   ├── config/
│   ├── core/
│   │   ├── useCases/
│   │   ├── models/
│   ├── infra/
│   │   ├── integrations/
│   │   ├── services/
│   └── server.js
├── tests/
│   ├── unit/
│   ├── integration/
├── .env
├── .gitignore
├── package.json
├── README.md
└── swagger.json
