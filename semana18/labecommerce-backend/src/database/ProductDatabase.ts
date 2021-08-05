import { Product } from "../entities/Product";
import { Ticket } from "../entities/Ticket";
import BaseDatabase from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    constructor(){
        super();
    };

    public static createProduct = async(newProduct: Product): Promise<any> => {
        await BaseDatabase.connection("Product")
            .insert(newProduct);
    };

    public static createTrip = async(newTrip: Ticket): Promise<any> => {
        await BaseDatabase.connection("Product")
            .insert(newTrip);
    };

    public static getProducts = async (): Promise<any> => {
        const result: Product[] = await BaseDatabase.connection("Product")
            .select();

        return result;
    };

    public static getPriceProductById = async(productId: string): Promise<Product> => {
        const result = await BaseDatabase.connection("Product")
            .select("price")
            .where({ id: productId});

        return new Product(result[0].id, result[0].name, result[0].description, result[0].price);
    };
    
    public static getTrips = async (): Promise<any> => {
        const result = await BaseDatabase.connection("Product")
            .select()
            .where("origin","<>", "not applied");

        return result;
    };
};