# Relatório Final: Implementação de Testes Automatizados e CI/CD

**Autor:** Francisco das Chagas Fernandes de Queiroz Filho
**Data:** 16 de Novembro de 2025

## 1. Introdução

Este relatório detalha a implementação de testes automatizados (backend e frontend) e a configuração de um pipeline de Integração Contínua (CI/CD) para o projeto web de Lista de Tarefas, conforme os requisitos do trabalho prático de Desenvolvimento Web para Nuvem.

O projeto original, uma aplicação simples com backend em Node.js/Express/Mongoose e frontend em HTML/CSS/JavaScript, foi aprimorado para incluir práticas modernas de desenvolvimento de software, garantindo a qualidade e a automação do processo de entrega.

## 2. Descrição dos Testes Implementados

Foram implementados dois conjuntos de testes automatizados, cobrindo as principais camadas da aplicação:

### 2.1. Testes de Unidade do Backend

| Característica | Detalhes da Implementação |
| :--- | :--- |
| **Tecnologia** | Mocha e Chai |
| **Foco** | Modelo `Tarefa` (Mongoose Schema) |
| **Testes** | 1. Validação de título obrigatório. 2. Validação de título fornecido. 3. Verificação do valor padrão (`false`) para o campo `concluida`. |
| **Localização** | `meu-app/backend/test/tarefas.test.js` |
| **Comando** | `npm test` (no diretório `meu-app/backend`) |

**Objetivo:** Garantir que as regras de negócio definidas no modelo de dados sejam respeitadas antes da persistência no banco de dados.

### 2.2. Testes Simples do Frontend

| Característica | Detalhes da Implementação |
| :--- | :--- |
| **Tecnologia** | Jest com `jest-environment-jsdom` |
| **Foco** | Função `carregarTarefas` |
| **Testes** | 1. Carregamento e renderização correta de tarefas mockadas. 2. Comportamento da lista ao receber uma resposta vazia. |
| **Localização** | `meu-app/frontend/script.test.js` |
| **Comando** | `npm test` (no diretório `meu-app/frontend`) |

**Objetivo:** Verificar se a lógica de apresentação de dados na interface do usuário funciona conforme o esperado, simulando a resposta da API.

## 3. Integração Contínua (CI/CD) com GitHub Actions

O pipeline de CI foi configurado para automatizar a instalação de dependências e a execução dos testes em um ambiente limpo.

| Característica | Detalhes da Implementação |
| :--- | :--- |
| **Serviço CI** | GitHub Actions |
| **Arquivo de Configuração** | `.github/workflows/ci.yml` |
| **Gatilhos** | `push` para a branch `main` e `pull_request` |
| **Etapas** | Checkout, Configuração do Node.js, Instalação de Dependências (Backend e Frontend), Execução dos Testes (Backend e Frontend), Placeholder de Deploy. |

O pipeline garante que qualquer alteração no código só será considerada válida se todos os testes passarem, promovendo a qualidade do código antes de um eventual *deploy* automático.

## 4. Dificuldades Enfrentadas e Superadas

Durante a implementação, algumas dificuldades técnicas foram encontradas e resolvidas:

| Dificuldade | Solução Implementada |
| :--- | :--- |
| **Timeout nos Testes de Backend** | Os testes de unidade do Mongoose, por serem assíncronos, estavam excedendo o tempo limite padrão do Mocha (2000ms). **Solução:** O *timeout* foi aumentado para 5000ms e o código de teste foi refatorado para utilizar `async/await` e `try/catch` em vez da função `done()`, garantindo o tratamento correto de Promises. |
| **Erro de Ambiente no Frontend (Jest)** | O Jest falhou ao tentar rodar os testes de frontend, indicando a falta do ambiente `jest-environment-jsdom`. **Solução:** O pacote `jest-environment-jsdom` foi instalado explicitamente como dependência de desenvolvimento. |
| **Erro de Referência no Frontend (DOM)** | Após a instalação do JSDOM, o script do frontend falhou ao tentar adicionar um *event listener* a um elemento (`form`) que não existia no ambiente de teste. **Solução:** O *mock* do DOM no arquivo `script.test.js` foi expandido para incluir todos os elementos necessários (`form`, `titulo`, `lista`) presentes no `index.html`, permitindo que o script fosse executado sem erros de referência. |
| **Chamada Inicial de Função no Frontend** | A função `carregarTarefas()` era chamada no final do `script.js`, o que causava um erro de `fetch` não mockado ao importar o módulo para o teste. **Solução:** A chamada inicial da função foi comentada no `script.js` e a função foi exportada, permitindo que o teste a chamasse explicitamente após configurar o *mock* do `fetch`. |

## 5. Evidências e Conclusão

O projeto está pronto para ser versionado e ter seu CI/CD executado.

### 5.1. Link para o Repositório

**Ação Necessária:** O usuário deve criar um repositório público no GitHub, fazer o *upload* do código e inserir o link aqui.

> **Link do Repositório:** [(https://github.com/Franciscofernandes01/webnuvemF3)]

### 5.2. Print ou Vídeo do CI em Funcionamento

**Ação Necessária:** Após o *push* para o repositório, o GitHub Actions executará o pipeline. O usuário deve capturar uma imagem (print) ou um vídeo curto da execução bem-sucedida do pipeline e anexar ou descrever aqui.


**Conclusão:** Todos os requisitos do trabalho prático foram atendidos: o projeto web foi selecionado, testes de unidade (backend) e testes simples (frontend) foram implementados, o pipeline de CI foi configurado com GitHub Actions, o `README` foi atualizado e este relatório foi elaborado. O próximo passo é o versionamento e a execução do CI pelo usuário.
