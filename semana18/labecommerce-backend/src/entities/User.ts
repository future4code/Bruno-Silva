import { Purchase } from "./Purchase";

export class User{
    static purchases: any;
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private age: number,
        private purchases?: Purchase[] | undefined
    ) {};

    public getId(): string {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public getEmail(): string {
        return this.email;
    };

    public getAge(): number {
        return this.age;
    };

    // public setUserPurchases(userPurchases: Purchase[]): Purchase[] {
    //     for (let purchase of userPurchases){
    //         this.purchases?.push(purchase)
    //     }

    //     return this.purchases ? this.purchases : [];
    // };
};