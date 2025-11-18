# Projeto Web para Desenvolvimento em Nuvem

Este projeto é uma aplicação web simples de Lista de Tarefas (To-Do List) com arquitetura **Backend (Node.js/Express/Mongoose)** e **Frontend (HTML/CSS/JavaScript)**.

O objetivo deste repositório é demonstrar a implementação de **Testes Automatizados** e um **Pipeline de Integração Contínua (CI/CD)** utilizando GitHub Actions, conforme solicitado no trabalho prático.

## 🚀 Estrutura do Projeto

O projeto está dividido em dois diretórios principais:

- `meu-app/backend`: Contém a API RESTful desenvolvida em Node.js com Express e Mongoose.
- `meu-app/frontend`: Contém a interface do usuário em HTML, CSS e JavaScript puro.

## ⚙️ Pré-requisitos

Para rodar o projeto localmente, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 18+)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## 🛠️ Instalação e Execução Local

Siga os passos abaixo para configurar e executar o projeto:

### 1. Backend

1. Navegue até o diretório do backend:
   ```bash
   cd meu-app/backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   # O servidor será iniciado na porta 3000 por padrão.
   ```
   **Nota:** O backend está configurado para se conectar a um banco de dados MongoDB Atlas. Para rodar o servidor, é necessário que a URI de conexão no arquivo `meu-app/backend/server.js` seja válida.

### 2. Frontend

O frontend é servido diretamente pelo backend. Após iniciar o servidor, acesse `http://localhost:3000` no seu navegador.

## ✅ Testes Automatizados

Foram implementados testes de unidade para o backend e testes simples para o frontend.

### Testes de Backend (Unidade)

- **Tecnologias:** Mocha e Chai.
- **Foco:** Validação do modelo `Tarefa` (se o título é obrigatório e se o campo `concluida` é `false` por padrão).
- **Execução:**
  ```bash
  cd meu-app/backend
  npm test
  ```

### Testes de Frontend (Simples)

- **Tecnologias:** Jest com `jest-environment-jsdom`.
- **Foco:** Teste da função `carregarTarefas` para verificar se a lista é renderizada corretamente com base na resposta da API (mockada).
- **Execução:**
  ```bash
  cd meu-app/frontend
  npm test
  ```

## 🔁 Integração Contínua (CI)

O projeto utiliza **GitHub Actions** para automatizar o processo de Integração Contínua.

### Pipeline Configurado

O pipeline é definido no arquivo `.github/workflows/ci.yml` e é acionado em todo `push` para a branch `main` e em todo `pull_request`.

As etapas do pipeline são:

1. **Checkout code:** Baixa o código do repositório.
2. **Set up Node.js:** Configura o ambiente Node.js (versão 20).
3. **Install Backend Dependencies:** Instala as dependências do backend.
4. **Run Backend Tests:** Executa os testes de unidade do backend (`npm test`).
5. **Install Frontend Dependencies:** Instala as dependências do frontend.
6. **Run Frontend Tests:** Executa os testes do frontend (`npm test`).
7. **Deploy (Placeholder):** Uma etapa de deploy de exemplo que pode ser configurada para um serviço de hospedagem real.

O pipeline só prossegue para as etapas seguintes se as anteriores forem bem-sucedidas. A falha em qualquer teste interrompe o pipeline.

## 📄 Relatório do Projeto

Para a entrega final, será gerado um relatório detalhado contendo:

1. Descrição detalhada dos testes implementados (backend e frontend).
2. Print ou vídeo do CI em funcionamento (será necessário que o usuário crie o repositório e execute o CI).
3. Link para o repositório com CI configurado.
4. Dificuldades enfrentadas e como foram superadas.
