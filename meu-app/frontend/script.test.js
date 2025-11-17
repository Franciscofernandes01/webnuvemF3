/**
 * @jest-environment jsdom
 */

// 1. Mock para a função fetch
global.fetch = jest.fn();

// 2. Mock para a chamada inicial (que ocorre ao carregar o script.js)
// Isso impede o erro "Cannot read properties of undefined (reading 'json')"
global.fetch.mockResolvedValue({
    json: async () => [], // Retorna uma lista vazia para a chamada inicial
});

// 3. Mock para o DOM
document.body.innerHTML = `
    <form id="form">
        <input type="text" id="titulo" placeholder="Digite uma tarefa" required>
        <button type="submit">Adicionar</button>
    </form>
    <ul id="lista"></ul>
`;

// 4. Importar o script (aqui a chamada inicial é executada e usa o mock acima)
const { carregarTarefas } = require('./script'); 

describe('Frontend Tests', () => {
    beforeEach(() => {
        // Limpa o mock para que os testes individuais possam configurar seus próprios mocks
        fetch.mockClear();
        document.getElementById('lista').innerHTML = '';
    });

    it('deve carregar e exibir tarefas corretamente', async () => {
        // Mock ESPECÍFICO para este teste
        const mockTarefas = [
            { titulo: 'Tarefa 1' },
            { titulo: 'Tarefa 2' }
        ];
        
        fetch.mockResolvedValueOnce({
            json: async () => mockTarefas,
        });

        await carregarTarefas();

        const lista = document.getElementById('lista');
        expect(lista.children.length).toBe(2);
        expect(lista.children[0].textContent).toBe('Tarefa 1');
        expect(lista.children[1].textContent).toBe('Tarefa 2');
        expect(fetch).toHaveBeenCalledWith('/api/tarefas');
    });

    it('deve exibir uma lista vazia se não houver tarefas', async () => {
        // Mock ESPECÍFICO para este teste
        fetch.mockResolvedValueOnce({
            json: async () => [],
        });

        await carregarTarefas();

        const lista = document.getElementById('lista');
        expect(lista.children.length).toBe(0);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
