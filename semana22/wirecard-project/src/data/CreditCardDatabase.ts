import { CustomError } from "../error/CustomError";
import { CreditCard } from "../models/CreditCard";
import { BaseDatabase } from "./BaseDatabase";


export class CreditCardDatabase extends BaseDatabase {
    private static TABLE_NAME = "CreditCard";

    findCreditCardByHolderName = async(holderName: string):Promise<CreditCard> => {
        const CreditCard = await BaseDatabase.connection(CreditCardDatabase.TABLE_NAME)
            .select()
            .where({ holderName });

        return CreditCard[0] ? CreditCard[0].id : undefined;
    };

    createCreditCard = async (newCreditCard: CreditCard): Promise<void> => {
        try {
            await BaseDatabase.connection(CreditCardDatabase.TABLE_NAME)
                .insert({
                    id: newCreditCard.getId(),
                    holderName: newCreditCard.getHolderName(),
                    brand: newCreditCard.getBrand(),
                    cardNumber: newCreditCard.getCardNumber(),
                    expirationDate: newCreditCard.getExpirationDate(),
                    cvv: newCreditCard.getCVV()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};