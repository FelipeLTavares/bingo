import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GameService } from './gameService';

describe('GameService', () => {
    let gameService;
    
    beforeEach(() => {
        gameService = new GameService();

        gameService.db = {
            games: {
                add: vi.fn(),
                get: vi.fn(),
                toArray: vi.fn(),
                update: vi.fn(),
            }
        };
    })


    it('should get a game by id', async () => {
        const game = {
            id: 1,
            finished: false,
            drawnNumbers: [],
            players: [],
            winners: [],
            lastNumber: undefined
        }
        gameService.db.games.get.mockResolvedValueOnce(game);

        const result = await gameService.getOneGame(1);
        expect(result).toEqual(game);
    });

    it('should create a game', async () => {
        const mock = {
            id: 1,
            finished: false,
            drawnNumbers: [],
            players: [],
            winners: [],
            lastNumber: undefined
        }
        gameService.db.games.add.mockResolvedValueOnce(1);
        const result = await gameService.addGame(mock);

        expect(result).equal(1);
    });

    it('should update a game', async () => {
        const mock = {
            id: 1,
            finished: false,
            drawnNumbers: [],
            players: [],
            winners: [],
            lastNumber: undefined
        }
        gameService.db.games.update.mockResolvedValueOnce(mock);
        const result = await gameService.updateGame(mock.id, mock);

        expect(result).equal(mock);
    });
});