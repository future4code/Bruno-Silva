/*
// Exercícios Herança
class User {
    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string
    ) {
        console.log("Chamando o construtor da classe User")
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    } 
};

const user1: User = new User("1", "user1@users.com", "Carlos", "carlitos");
console.log(user1);
console.log(user1.getEmail());
console.log(user1.getId());
console.log(user1.getName());

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer: Customer = new Customer("1", "lara@user.com", "Lara", "larinha", "1111 1111 1111 1111");
console.log(customer);
console.log(customer.getEmail());
console.log(customer.getId());
console.log(customer.getName());
console.log(customer.getCreditCard());
console.log(customer.purchaseTotal);
console.log(customer.introduceYourself()); 
*/

/*
// Exercícios Poliformismo
export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
};

const client: Client = {
    name: "Jeff",
    registrationNumber: 2,
    consumedEnergy: 50,
    calculateBill: () => {
        return 2;
    }
};

console.log(client.consumedEnergy);
console.log(client.name);
console.log(client.registrationNumber);
console.log(client.calculateBill());

// Exercício 2
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    };
};

// const place: Place = new Place("11111-111");
*/

// Exercício 3
/*
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    };

    public getResidentsQuantity = () => {
        return this.residentsQuantity;
    };
};

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    };

    public getFloorsQuantity = () => {
        return this.floorsQuantity;
    };
};

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    };

    public getMachinesQuantity = () => {
        return this.machinesQuantity;
    };
};

const residence: Residence = new Residence(10, "11111-111");
const commerce: Commerce = new Commerce(5, "22222-222");
const industry: Industry = new Industry(20, "33333-333");

// console.log(residence.getCep());
// console.log(commerce.getCep());
// console.log(industry.getCep());

*/

// Exercício 4
/*
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    };
};



interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
};

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    };

    public getResidentsQuantity = () => {
        return this.residentsQuantity;
    };
};

class ResidentialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        residentsQuantity: number,
        cep: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(residentsQuantity, cep)
    };

    public calculateBill = (): number => {
        return this.consumedEnergy*0,75;
    };

    public getCpf() {
        return this.cpf;
    }
};

const residentialClient: ResidentialClient = new ResidentialClient( "111.111.111-11", 20, "11111-111", "Joaozinho", 25, 100);

console.log(residentialClient.calculateBill());
console.log(residentialClient.consumedEnergy);
console.log(residentialClient.getCep());
console.log(residentialClient.getCpf());
console.log(residentialClient.getResidentsQuantity());
console.log(residentialClient.name);
console.log(residentialClient.registrationNumber);
*/

// Exercicio 5
/*
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    };
};

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    };

    public getFloorsQuantity = () => {
        return this.floorsQuantity;
    };
};

interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
};



class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: string,
        floorsQuantity: number,
        cep: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(floorsQuantity, cep)
    };

    public calculateBill = (): number => {
        return this.consumedEnergy*0,53;
    };

    public getCnpj() {
        return this.cnpj;
    }
};

const commercialClient: CommercialClient = new CommercialClient( "00.000.000/0000-00", 20, "11111-111", "Informatica Sa", 25, 100);

console.log(commercialClient.calculateBill());
console.log(commercialClient.consumedEnergy);
console.log(commercialClient.getCep());
console.log(commercialClient.getCnpj());
console.log(commercialClient.getFloorsQuantity());
console.log(commercialClient.name);
console.log(commercialClient.registrationNumber);
*/