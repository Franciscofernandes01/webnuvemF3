/**
 * @jest-environment jsdom
 */

// Mock para a função fetch
global.fetch = jest.fn();

// Mock para o DOM
document.body.innerHTML = `
        <form id="form">
        <input type="text" id="titulo" placeholder="Digite uma tarefa" required>
        <button type="submit">Adicionar</button>
    </form>
    <ul id="lista"></ul>
`;

// Importar o script após o mock do DOM
const { carregarTarefas } = require('./script'); 

describe('Frontend Tests', () => {
    beforeEach(() => {
        fetch.mockClear();
        document.getElementById('lista').innerHTML = '';
    });

    it('deve carregar e exibir tarefas corretamente', async () => {
        // Mock da resposta da API
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
        // Mock da resposta da API vazia
        fetch.mockResolvedValueOnce({
            json: async () => [],
        });

        await carregarTarefas();

        const lista = document.getElementById('lista');
        expect(lista.children.length).toBe(0);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
