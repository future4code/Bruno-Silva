import { newUserBalance } from '../src/index';

describe("Test if user have enought balance amount to purchase new itens", () => {
    test("Test if balance is higher than purchase price", () => {
        const purchaseTest = newUserBalance({name: "Mateus", balance: 100}, 40);

        expect(purchaseTest).toEqual({
            name: "Mateus",
            balance: 60
        });
    });


});