const getUniqueNumbers = (min: number, max: number, count: number) => {
    const numbers: number[] = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

export const generateBingoTicket = () => {
    const card: any = { B: [], I: [], N: [], G: [], O: [] };

    card.B = getUniqueNumbers(1, 15, 5);
    card.I = getUniqueNumbers(16, 30, 5);
    card.N = getUniqueNumbers(31, 45, 5);
    card.G = getUniqueNumbers(46, 60, 5);
    card.O = getUniqueNumbers(61, 75, 5);

    card.N[2] = undefined;

    return card;
};