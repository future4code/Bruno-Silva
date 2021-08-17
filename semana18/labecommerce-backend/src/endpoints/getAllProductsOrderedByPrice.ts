import { Request, Response } from 'express';
import { ProductDatabase } from '../database/ProductDatabase';

const getAllProductsOrderedByPrice = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const order =  req.query.order as string;
        order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";

        const result = await ProductDatabase.getProducts(order);

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        res.status(200).send({products: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getAllProductsOrderedByPrice;