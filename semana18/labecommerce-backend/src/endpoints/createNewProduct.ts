import { Request, Response } from 'express';
import { RandomNumber } from '../constants/RandomNumber';
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


        const newProduct: Product = new Product(RandomNumber.getRandomNumber(), name, description, price);
        // const createProduct: ProductDatabase = await ProductDatabase.newProduct(newProduct);
        await ProductDatabase.createProduct(newProduct);

        //QUAL ERRO PODERIA DAR COMO RESPOSTA DO CONNECTION DE UM POST?

        res.status(201).send({ message: "Product created successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default createNewProduct;