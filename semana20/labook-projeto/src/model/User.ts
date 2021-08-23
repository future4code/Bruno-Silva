export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {}

    getId():string {
        return this.id;
    };

    getName():string {
        return this.name;
    };

    getEmail():string {
        return this.email;
    };

    getPassword():string {
        return this.password;
    };

    setId(newId: string):void {
        this.id = newId;
    };

    setName(newName: string):void {
        this.name = newName;
    };

    setEmail(newEmail: string):void {
        this.email = newEmail;
    };

    setPassword(newPassword: string):void {
        this.password = newPassword;
    };

    static toUserModel(data: any):User {
        return new User(data.id, data.name, data.email, data.password);
    };
};

export interface UserInputDTO {
    name: string | undefined,
    email: string | undefined,
    password: string | undefined
};

export interface LoginInputDTO {
    email: string | undefined,
    password: string | undefined
};