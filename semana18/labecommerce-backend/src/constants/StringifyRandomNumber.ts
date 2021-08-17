export class StringifyRandomNumber {
    constructor(){};

    public static getStringifyRandomNumber(): string {
        return ((Date.now() + Math.random())/1000000000000).toString();
    };
};