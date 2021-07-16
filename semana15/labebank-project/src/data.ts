import { account } from './types';

export const users: account[] = [
    {
        name: "Tiago",
        cpf: "03567815911",
        birthDay: "10/01/1985",
        balance: 350,
        clientTransactions: [
            {
                value: 50,
                transactionDate: "15/08/2011",
                description: "Envio para Nélia"
            },
            {
                value: 87,
                transactionDate: "15/08/2011",
                description: "Parcela de viagem - Junior"
            }
        ]
    },
    {
        name: "Jesuina",
        cpf: "13500275984",
        birthDay: "05/11/1973",
        balance: 275,
        clientTransactions: [
            {
                value: 130,
                transactionDate: "15/08/2011",
                description: "Presente do Carlinhos"
            },
            {
                value: 35,
                transactionDate: "15/08/2011",
                description: "Dívida com Edinho"
            }
        ]
    },
    {
        name: "Sandro",
        cpf: "35678915369",
        birthDay: "23/03/1995",
        balance: 400,
        clientTransactions: []
    }
]