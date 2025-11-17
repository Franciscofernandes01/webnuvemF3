// Arquivo: meu-app/frontend/jest.config.js

module.exports = {
  // Usa o ambiente JSDOM para simular o navegador
  testEnvironment: 'jsdom',
  
  // Ignora a transformação de todos os módulos em node_modules
  // Isso impede que o Jest tente processar a sintaxe 'import' dentro de bibliotecas
  transformIgnorePatterns: [
    '/node_modules/'
  ],
};
