// Exercício 1
// Letra a
/*  Resposta: 'Construtor' é método obrigatório no paradigma POO que define as regras de inicialização
de uma classe, ou seja, é onde definimos os parâmetros de criação de um dado componente da classe. */


/* Letra b
type Transaction = {
    description: string,
    value: number,
    date: string
};

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };
};

const user1: UserAccount = new UserAccount("111.111.111-11", "teste", 20);

console.log(user1);

Resposta: Ao executar a chamada, foi impresso uma única vez a mensagem no console.log. */

/* Letra c
    Resposta: Para acessar informações privadas é necessário que se crie métodos de classe
    do tipo públicos que chamem as informações necessárias. */

// Exercício 2

/* class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(desc: string, value: number, date: string) {
        this.description = desc;
        this.value = value;
        this.date = date
    };
};

const transaction1: Transaction = new Transaction("descrição teste", 15, "02/08/2021");

console.log(transaction1); */

// Exercício 3

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(desc: string, value: number, date: string) {
        this.description = desc;
        this.value = value;
        this.date = date
    };

    public getTransaction() {
        const description = this.description;
        const value = this.value;
        const date = this.date;

        return {description, value, date};
    };

    public setTransaction(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;

        return "novos valores inseridos";
    };
};

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getUserAccount() {
        const cpf = this.cpf;
        const name = this.name;
        const age = this.age;
        const balance = this.balance;
        const transactions = this.transactions;

        return {cpf, name, age, balance, transactions};
    };

    public getBalance() {
        return this.balance;
    };

    public getTransactions() {
        return this.transactions;
    };

    public setBalance(newValue: number) {
        this.balance = this.balance + newValue;

        return `Novo saldo: ${this.balance}`;
    };

    public setTransaction(transaction: Transaction) {
        this.transactions.push(transaction);

        return "Nova transação incluída";
    };
};

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts() {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount) {
        this.accounts.push(newAccount);

        return "Nova conta de usuário inserida";
    };
};

const transaction: Transaction = new Transaction("inicio", 10, "01/08/2020");
const transaction2: Transaction = new Transaction("inicio2", 20, "13/07/2021");

console.log(transaction.setTransaction("fim", 15, "10/08/2020"));
console.log(transaction.getTransaction());

const user1: UserAccount = new UserAccount("111.111.111-11", "user1", 20);
const user2: UserAccount = new UserAccount("222.222.222-22", "user2", 25);

console.log(user1.getBalance());
console.log(user1.setBalance(3));
console.log(user1.setBalance(5));
console.log(user1.getBalance());

console.log(user1.getTransactions());
console.log(user1.setTransaction(transaction));
console.log(user1.setTransaction(transaction2));
console.log(user1.getTransactions());

// const accounts: UserAccount[] = new Bank([user1, user2]); 
// console.log(accounts.getAccounts());