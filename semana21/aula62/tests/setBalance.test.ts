import { newUserBalance } from '../src/index';
import { User } from '../src/types';

describe("Test if user have enought balance amount to purchase new itens", () => {
    test("Test if balance is bigger than purchase price", () => {
        const input = 40;
        const output: User | undefined = newUserBalance({name: "Mateus", balance: 100}, input);

        output? expect(output).toEqual({
            name: "Mateus",
            balance: 60
        }) : expect(output).toBe(undefined);
    });

    test("Test if balance is equal to purchase price", () => {
        const input = 100;
        const output: User | undefined = newUserBalance({name: "Mateus", balance: 100}, input);

        output ? expect(output.balance).toBe(0) : expect(output).toBe(undefined);
    });

    test("Test if balance is lesser than purchase price", () => {
        const input = 120;
        const output: User | undefined = newUserBalance({name: "Mateus", balance: 100}, input);

        expect(output).not.toBeDefined();
        // output ? expect(output.balance).toBe(0) : expect(output).toBe(undefined);
    });
});