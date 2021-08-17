export class Purchase {
    constructor(
        private id: string,
        private user_id: string,
        private product_id: string,
        private quantity: number,
        private total_price: number
    ) {};
};