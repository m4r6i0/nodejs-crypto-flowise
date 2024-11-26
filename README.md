
# 🌟 **Node.js Crypto Flowise** 🌟

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-UI-orange)](https://swagger.io/)
[![Jest](https://img.shields.io/badge/Tests-Jest%20Coverage-brightgreen)](https://jestjs.io/)

Uma aplicação **Node.js** que integra a API do **CoinGecko** e o **Flowise** para consultas de dados sobre criptomoedas e processamento de perguntas utilizando **NLP (Natural Language Processing)**. 

Este projeto adota **Clean Architecture**, testes automatizados e documentação interativa com **Swagger**.

---

## 🚀 **Funcionalidades**
- 🔹 **Obter preço do Bitcoin:** Consultar o preço em tempo real utilizando a API do CoinGecko.
- 🔹 **Processamento de perguntas:** Enviar perguntas para o **Flowise** e obter respostas personalizadas baseadas em inteligência artificial.
- 🔹 **Clean Architecture:** Organização de código clara e modular.
- 🔹 **Documentação Swagger:** Interface interativa para explorar e testar os endpoints.
- 🔹 **Testes Automatizados:** Cobertura de testes unitários e de integração utilizando **Jest** e **Supertest**.

---

## 🛠 **Tecnologias Utilizadas**
| Tecnologia    | Logotipo                                                                 |
|---------------|--------------------------------------------------------------------------|
| **Node.js**   | ![Node.js](https://img.shields.io/badge/Node.js-18-green)               |
| **Express.js**| ![Express](https://img.shields.io/badge/Express-4.18.2-blue)           |
| **Flowise**   | ![Flowise](https://img.shields.io/badge/Flowise-NLP-yellow)            |
| **Swagger**   | ![Swagger](https://img.shields.io/badge/Swagger-UI-orange)             |
| **Jest**      | ![Jest](https://img.shields.io/badge/Jest-Test-brightgreen)            |
| **Supertest** | ![Supertest](https://img.shields.io/badge/Supertest-Integration-green) |

---

## 📁 **Estrutura do Projeto**
```plaintext
nodejs-crypto-flowise/
├── src/
│   ├── app/
│   │   ├── controllers/     # Controladores para os endpoints
│   │   ├── middlewares/     # Tratamento de erros e validações
│   │   ├── routes/          # Definição das rotas da API
│   ├── config/              # Configurações e variáveis de ambiente
│   ├── core/
│   │   ├── models/          # Modelos e entidades de dados
│   │   ├── useCases/        # Casos de uso para lógica de negócios
│   ├── infra/
│       ├── services/        # Integrações externas
├── tests/                   # Testes unitários e de integração
├── .env                     # Arquivo de configuração de variáveis de ambiente
├── .gitignore               # Arquivos ignorados pelo Git
├── .eslintrc.json           # Configuração do ESLint
├── .prettierrc              # Configuração do Prettier
├── package.json             # Gerenciador de dependências
├── README.md                # Documentação do projeto
└── swagger.json             # Especificações Swagger
```

---

## 📜 **Instruções de Instalação**
### **Pré-requisitos**
- Node.js v18 ou superior
- NPM ou Yarn
- Ambiente configurado com **Flowise**

### **Passos**
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`.

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse a documentação Swagger:
   ```
   http://localhost:3001/api-docs
   ```

---

## 🔍 **Endpoints**
### **GET /crypto/price**
Retorna o preço atual do Bitcoin.

### **POST /crypto/question**
Processa perguntas relacionadas a criptomoedas utilizando o Flowise.

---

## ✅ **Testes**
Execute os testes utilizando:
```bash
npm test
```

---

## 📞 **Contato**
Se precisar de ajuda, entre em contato pelo e-mail: m4r6i0@gmail.com

---


