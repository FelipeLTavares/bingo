export interface IPlayer {
    name: string;
    ticketNumbers: Object
}

export interface IGame {
    id?: string;
    gameNickname: string;
    drawnNumbers: number[];
    players: IPlayer[];
    winners: IPlayer[];
    lastNumber?: number;
    finished: boolean;
}

export interface IDefaultResponse {
    sucess: boolean;
    message: string;
}

export interface INewGameResponse extends IDefaultResponse{
    id?: string;
};

export interface IGetGameResponse extends IDefaultResponse{
    game?: IGame;
};

export interface IUpdateGameResponse extends IDefaultResponse{};

export interface IDeleteGameResponse extends IDefaultResponse{};

export interface IBingoTicket {
    B: number[];
    I: number[];
    N: number[];
    G: number[];
    O: number[];
}