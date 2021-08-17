export class Product {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected price: number
    ) {};

    public getId() {
        return this.id;
    };

    public getName() {
        return this.name;
    };

    public getDescription() {
        return this.description;
    };

    public getPrice() {
        return this.price;
    };
};