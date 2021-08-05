import { Request, Response } from 'express';
import { ProductDatabase } from '../database/ProductDatabase';
import { Product } from '../entities/Product';

const getAllProducts = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 422;

    try {
        const result: Product[] | undefined = await ProductDatabase.getProducts();

        console.log(result);
        //ta voltando como RowDataPacket. Não deveria voltar como type definido?

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({products: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage });
    };
};

export default getAllProducts;