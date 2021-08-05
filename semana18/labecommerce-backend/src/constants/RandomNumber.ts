export class RandomNumber {
    constructor(){};

    public static getRandomNumber(): string {
        return ((Date.now() + Math.random())/1000000000000).toString();
    };
};