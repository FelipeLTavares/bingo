import { describe, it, expect } from 'vitest';
import { generateBingoTicket } from './generateTicket';

describe('generateBingoTicket', () => {
    it('should return a bingo card with correct structure and unique numbers in each column', () => {
        const card = generateBingoTicket();

        // Verificar se a estrutura do cartão está correta
        expect(card).toHaveProperty('B');
        expect(card).toHaveProperty('I');
        expect(card).toHaveProperty('N');
        expect(card).toHaveProperty('G');
        expect(card).toHaveProperty('O');

        // Verificar a quantidade de números por coluna
        expect(card.B.length).toBe(5);
        expect(card.I.length).toBe(5);
        expect(card.N.length).toBe(5);
        expect(card.G.length).toBe(5);
        expect(card.O.length).toBe(5);

        // Verificar se o centro da coluna N está vazio (undefined)
        expect(card.N[2]).toBeUndefined();

        // Verificar se os números estão nos intervalos corretos
        card.B.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(1);
            expect(num).toBeLessThanOrEqual(15);
        });

        card.I.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(16);
            expect(num).toBeLessThanOrEqual(30);
        });

        card.N.forEach((num, index) => {
            if (index !== 2) {
                expect(num).toBeGreaterThanOrEqual(31);
                expect(num).toBeLessThanOrEqual(45);
            }
        });

        card.G.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(46);
            expect(num).toBeLessThanOrEqual(60);
        });

        card.O.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(61);
            expect(num).toBeLessThanOrEqual(75);
        });

        // Verificar se não há duplicatas dentro de cada coluna
        ['B', 'I', 'N', 'G', 'O'].forEach(column => {
            const uniqueNumbers = new Set(card[column]);
            expect(uniqueNumbers.size).toBe(5);
        });
    });
});