import { Request, Response } from 'express';
import { StringifyRandomNumber } from '../constants/StringifyRandomNumber';
import { ProductDatabase } from '../database/ProductDatabase';
import { Product } from '../entities/Product';

const createNewProduct = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 400;

    try {
        const {name, description, price} = req.body;

        if (!name || !description || !price) {
            errorCode = 422;
            throw new Error(`One or more fields are empty! Please, fill 'name',
                'description' and 'price' to proceed`);
        };

        if (typeof price !== "number" || price <= 0) {
            errorCode = 422;
            throw new Error(`'price' was expected as a positive and not null number!
                Please, check 'price' input´s value`);
        };


        const newProduct: Product = new Product(StringifyRandomNumber.getStringifyRandomNumber(),
            name, description, price);

        await ProductDatabase.createProduct(newProduct);

        res.status(201).send({ message: "Product created successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default createNewProduct;