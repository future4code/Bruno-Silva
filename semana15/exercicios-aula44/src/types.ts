export enum TYPES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}