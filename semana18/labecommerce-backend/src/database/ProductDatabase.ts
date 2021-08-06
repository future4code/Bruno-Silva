import { Product } from "../entities/Product";
import { Ticket } from "../entities/Ticket";
import BaseDatabase from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    constructor() {
        super();
    };

    public static createProduct = async (newProduct: Product): Promise<void> => {
        await BaseDatabase.connection("Product")
            .insert(newProduct);
    };

    public static createTrip = async (newTrip: Ticket): Promise<void> => {
        await BaseDatabase.connection("Product")
            .insert(newTrip);
    };

    public static getProducts = async (
        order?: string
    ): Promise<Product[]> => {
        let result: Product[] = [];

        const products = await BaseDatabase.connection("Product")
            .select()
            .orderBy("price", order);

        for (let product of products) {
            const productInClass = new Product(product.id, product.name, product.description, product.price);

            result.push(productInClass);
        };

        return result;
    };

    public static getPriceProductById = async (productId: string): Promise<Product> => {
        const result = await BaseDatabase.connection("Product")
            .select()
            .where({ id: productId });

        return new Product(result[0].id, result[0].name, result[0].description, result[0].price);
    };

    public static getTrips = async (): Promise<Ticket[]> => {
        let result: Ticket[] = [];

        const trips = await BaseDatabase.connection("Product")
            .select()
            .where("origin", "<>", "not applied");

        for (let trip of trips) {
            const tripInClass = new Ticket(trip.id, trip.name, trip.description, trip.price,
                trip.origin, trip.destination);

            result.push(tripInClass);
        };

        return result;
    };
};