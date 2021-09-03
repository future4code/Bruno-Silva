import { CustomError } from "../error/CustomError";
import { Buyer } from "../models/Buyer";
import { BaseDatabase } from "./BaseDatabase";

export class BuyerDatabase extends BaseDatabase {
    private static TABLE_NAME = "Buyer";

    findBuyerByEmail = async (email: string): Promise<Buyer | undefined> => {

        const buyer = await BaseDatabase.connection(BuyerDatabase.TABLE_NAME)
            .select()
            .where({ email: email });

        return buyer[0] && Buyer.toBuyerModel(buyer[0]);
    };

    createBuyer = async (newBuyer: Buyer): Promise<void> => {
        try {
            await BaseDatabase.connection(BuyerDatabase.TABLE_NAME)
                .insert({
                    id: newBuyer.getId(),
                    name: newBuyer.getName(),
                    email: newBuyer.getEmail(),
                    cpf: newBuyer.getCpf(),
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};