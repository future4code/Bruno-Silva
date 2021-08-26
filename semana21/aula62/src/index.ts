import { User } from "./types";

export const newUserBalance = (user: User, purchase: number): User | undefined => {
    if (user.balance >= purchase) {
        return {
            ...user,
            balance: user.balance - purchase
        };
    } else {
        return undefined;
    };
};