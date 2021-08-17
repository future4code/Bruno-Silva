import { Request, Response } from 'express';
import { StringifyRandomNumber } from '../constants/StringifyRandomNumber';
import { ProductDatabase } from '../database/ProductDatabase';
import { PurchaseDatabase } from '../database/PurchaseDatabase';
import { UserDatabase } from '../database/UserDatabase';
import { Product } from '../entities/Product';
import { Purchase } from '../entities/Purchase';
import { User } from '../entities/User';

const createNewPurchase = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 400;

    try {
        const {userId, productId, quantity} = req.body;

        if (!userId || !productId || !quantity) {
            errorCode = 422;
            throw new Error(`One or more fields are empty! Please, fill 'userId',
                'productId' and 'quantity' to proceed`);
        };

        if (typeof quantity !== "number" || quantity <= 0 || quantity.toString().split(".").length > 1) {
            errorCode = 422;
            throw new Error(`'quantity' was expected as an integer, positive and not null number!
                Please, check 'quantity' input´s value`);
        };

        const userById: User = await UserDatabase.getUserById(userId);

        const productById = await ProductDatabase.getPriceProductById(productId);

        if(!userById){
            errorCode = 422;
            throw new Error(`User not found! Please, check if 'userId' is a valid one`);
        };

        if(!productById){
            errorCode = 422;
            throw new Error(`Product not found! Please, check if 'productId' is a valid one`);
        };

        
        const totalPrice: number = productById.getPrice()*quantity;

        const newPurchase: Purchase = new Purchase(StringifyRandomNumber.getStringifyRandomNumber(),
            userId, productId, quantity, totalPrice);

        await PurchaseDatabase.createPurchase(newPurchase);

        res.status(201).send({ message: "Purchase created successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default createNewPurchase;