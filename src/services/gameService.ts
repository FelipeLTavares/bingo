import { IGame } from "@/types";
import Dexie, { EntityTable } from "dexie";

export class GameService {
    db;

    constructor() {
        const db = new Dexie('Bingo') as Dexie & {
            games: EntityTable<IGame, 'id'>
        };
        db.version(1).stores({
            games: "++id,drawnNumbers,players,finished"
        })

        this.db = db;
    }

    async addGame(game: IGame) {
        try {
            const id = await this.db.games.add(JSON.parse(JSON.stringify(game)));
            return id;
        } catch (error) {
            window.alert('Erro ao tentar criar jogo!')
        }
    }

    async getOneGame(id: number) {
        try {
            const game = await this.db.games.get({id});
            return game;
        } catch (error) {
            window.alert('Erro ao tentar achar o jogo')
        }
    }

    async getAllGames() {
        try {
            const game = await this.db.games.toArray();
            return game;
        } catch (error) {
            window.alert('Erro ao tentar achar os jogos')
        }
    }

    async updateGame(id: any, updatedGame: IGame) {
        try {
            // @ts-ignore
            const game = await this.db.games.update(id, JSON.parse(JSON.stringify(updatedGame)));
            return game;
        } catch (error) {
            console.log(error)
            window.alert('Erro ao tentar atualizar o jogo')
        }
    };

}