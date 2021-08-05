import { Product } from "../entities/Product";
import BaseDatabase from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    constructor(){
        super();
    };

    public static createProduct = async(newProduct: Product): Promise<any> => {
        await BaseDatabase.connection("Product")
            .insert(newProduct);
    };
};