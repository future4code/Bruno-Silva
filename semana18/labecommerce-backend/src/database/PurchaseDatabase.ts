import { Purchase } from "../entities/Purchase";
import BaseDatabase from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
    constructor(){
        super();
    };

    public static createPurchase = async(newPurchase: Purchase): Promise<any> => {
        await BaseDatabase.connection("Purchase")
            .insert(newPurchase);
    };

    public static getPurchases = async (): Promise<any> => {
        const result: Purchase[] | undefined = await BaseDatabase.connection("Purchase")
            .select();

        return result;
    };
};