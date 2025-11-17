// Arquivo: meu-app/backend/test/tarefas.test.js

import { expect } from 'chai';
import Tarefa from '../models/tarefas.js';

describe('Modelo Tarefa', () => {
    it('deve ser inválido se o título estiver vazio', async () => {
        const t = new Tarefa();
        try {
            await t.validate();
        } catch (err) {
            expect(err.errors.titulo).to.exist;
        }
    });

    it('deve ser válido se o título for fornecido', async () => {
        const t = new Tarefa({ titulo: 'Tarefa de Teste' });
        try {
            await t.validate();
        } catch (err) {
            expect(err).to.not.exist;
        }
    });

    it('o campo "concluida" deve ser falso por padrão', () => {
        const t = new Tarefa({ titulo: 'Tarefa Padrão' });
        expect(t.concluida).to.be.false;
    });
});
