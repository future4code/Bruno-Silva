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

    public static getPurchases = async (): Promise<Purchase[]> => {
        let result: Purchase[] = [];

        const purchases = await BaseDatabase.connection("Purchase")
            .select();

        for (let purchase of purchases) {
            const purchaseInClass = new Purchase(purchase.id, purchase.user_id,
                purchase.product_id, purchase.quantity, purchase.total_price);

            result.push(purchaseInClass);
        };

        return result;
    };

    public static getPurchasesByUserId = async(userId: string):Promise<Purchase[]> => {
        let result: Purchase[] = [];

        const purchases = await BaseDatabase.connection("Purchase")
            .select()
            .where({user_id: userId});

        for (let purchase of purchases) {
            const purchaseInClass = new Purchase(purchase.id, purchase.user_id,
                purchase.product_id, purchase.quantity, purchase.total_price);

            result.push(purchaseInClass);
        };

        return result;
    };
};