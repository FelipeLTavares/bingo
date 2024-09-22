export const selectRandomNumber = (selectedNumbers: number[]): any=> {
    const randomNumber = Math.floor(Math.random() * 76);
    if(selectedNumbers.length > 74) return;
    if (selectedNumbers.includes(randomNumber)) {
        return selectRandomNumber(selectedNumbers);
    } else {
        return randomNumber;
    }
};