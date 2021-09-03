import { CustomError } from "../error/CustomError";
import { Payment } from "../models/Payment";
import { BaseDatabase } from "./BaseDatabase";


export class PurchaseDatabase extends BaseDatabase {
    private static TABLE_NAME = "Payment";

    createPayment = async (newPayment: Payment): Promise<void> => {
        try {
            await BaseDatabase.connection(PurchaseDatabase.TABLE_NAME)
                .insert({
                    id: newPayment.getId(),
                    amount: newPayment.getAmount(),
                    method: newPayment.getMethod(),
                    status: newPayment.getStatus(),
                    buyerId: newPayment.getBuyerId(),
                    clientId: newPayment.getClientId()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};