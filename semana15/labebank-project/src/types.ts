export type accountUser = {
    name: string,
    cpf: string,
    birthDay: string,
    balance: number,
    clientTransactions: transactions[]
};

export type transactions = {
    value: number,
    transactionDate: string,
    description: string
}

export type date = {
    day: number,
    month: number,
    year: number
}
    

