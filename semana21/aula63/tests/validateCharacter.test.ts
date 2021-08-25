import { validateCharacter } from "../src/index";

describe("Verify if it´s a valid character", () => {
    test("Should return false with an empty character name", () => {
        const result: boolean = validateCharacter({
            name: "",
            life: 1500,
            strength: 50,
            defense: 30
        });

        expect(result).toBe(false);
    });

    test("Should return false if character life is zero", () => {
        const result: boolean = validateCharacter({
            name: "teste",
            life: 0,
            strength: 50,
            defense: 30
        });

        expect(result).toBe(false);
    });

    test("Should return false if character strength is zero", () => {
        const result: boolean = validateCharacter({
            name: "teste",
            life: 1500,
            strength: 0,
            defense: 30
        });

        expect(result).toBe(false);
    });

    test("Should return false if character defense is zero", () => {
        const result: boolean = validateCharacter({
            name: "teste",
            life: 1500,
            strength: 50,
            defense: 0
        });

        expect(result).toBe(false);
    });

    test("Should return false if character´s life, strength or defense are a negative number", () => {
        const result: boolean = validateCharacter({
            name: "teste",
            life: -15,
            strength: 50,
            defense: 30
        })

        expect(result).toBe(false);
    });

    test("Should return true if it´s a valid character", () => {
        const result: boolean = validateCharacter({
            name: "teste",
            life: 1500,
            strength: 50,
            defense: 30
        });

        expect(result).toBe(true);
    });
});