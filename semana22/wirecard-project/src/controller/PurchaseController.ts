import { Request, Response } from 'express';
import { PurchaseBusiness } from '../business/PurchaseBusiness';

export class PurchaseController {
    constructor(){

    };

    create = async (req: Request, res: Response):Promise<void> => {
        try {
            const clientId = req.params.clientId as string;
            const { buyer, payment, holder, creditCard } =  req.body;

            const purchaseBusiness = new PurchaseBusiness();
            const result = await purchaseBusiness.create(buyer, payment, holder, creditCard, clientId);

            res.status(201).send({ message: result });
        } catch (error) {
            console.log(error);
        };
    };

    findById = async (req: Request, res: Response):Promise<void> => {
        try {
            res.send();
        } catch (error) {
            console.log(error);
        };
    };
};