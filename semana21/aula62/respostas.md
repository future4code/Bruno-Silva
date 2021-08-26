### Exercício 1

a) A interface criada foi:
```
export interface User {
    name: string,
    balance: number
};
```

b) A função criada foi:
```
const newUserBalance = (user: User, purchase: number): User | undefined => {
    if (user.balance >= purchase) {
        return {
            ...user,
            balance: user.balance - purchase;
        };
    } else {
        return undefined;
    };
};
```