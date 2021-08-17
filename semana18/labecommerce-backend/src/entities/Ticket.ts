import { Product } from "./Product";

export interface TravelRoute {
    origin: string,
    destination: string
};

export class Ticket extends Product implements TravelRoute {
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        public origin: string,
        public destination: string
    ) {
        super(id, name, description, price);
    };
};