import { CreditCard } from "../../models/CreditCard";

export interface CreditCardRepository {
    findCreditCardByHolderName(holderName: string):Promise<CreditCard>,
    createCreditCard(newCreditCard: CreditCard): Promise<void>
};