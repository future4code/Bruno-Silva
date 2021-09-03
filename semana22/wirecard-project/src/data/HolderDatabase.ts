import { CustomError } from "../error/CustomError";
import { Holder } from "../models/Holder";
import { BaseDatabase } from "./BaseDatabase";


export class HolderDatabase extends BaseDatabase {
    private static TABLE_NAME = "Holder";

    findHolderByDocumentNumber = async(holderRegister: string):Promise<Holder> => {
        const holder = await BaseDatabase.connection(HolderDatabase.TABLE_NAME)
            .select()
            .where({ documentNumber: holderRegister });

        return holder[0] ? holder[0].id : undefined;
    };

    createHolder = async (newHolder: Holder): Promise<void> => {
        try {
            await BaseDatabase.connection(HolderDatabase.TABLE_NAME)
                .insert({
                    id: newHolder.getId(),
                    name: newHolder.getName(),
                    birthDate: newHolder.getBirthDate(),
                    documentNumber: newHolder.getDocumentNumber()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};