import { describe, it, expect } from 'vitest';
import { selectRandomNumber } from './selectRandomNumber';

describe('selectRandomNumber', () => {
    it('should return a number between 1 and 75 that is not in the selectedNumbers array', () => {
        const selectedNumbers = [1, 2, 3, 4, 5];
        const randomNumber = selectRandomNumber(selectedNumbers);

        // Verificar se o número gerado está entre 1 e 75
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(75);

        // Verificar se o número não está no array selectedNumbers
        expect(selectedNumbers).not.toContain(randomNumber);
    });

    it('should return undefined if all numbers from 1 to 75 are selected', () => {
        const allSelectedNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
        const result = selectRandomNumber(allSelectedNumbers);

        expect(result).toBeUndefined();
    });

    it('should not return 0, even if it is randomly generated', () => {
        // Teste especial para garantir que 0 não seja retornado
        const selectedNumbers = [];
        const result = selectRandomNumber(selectedNumbers);

        // Verificar se o número gerado é entre 1 e 75, nunca 0
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(75);
    });
});
