import { BoletoDatabase } from "../data/BoletoDatabase";
import { BuyerDatabase } from "../data/BuyerDatabase";
import { ClientDatabase } from "../data/ClientDatabase";
import { CustomError } from "../error/CustomError";
import { Boleto } from "../models/Boleto";
import { Buyer, BuyerInputDTO } from "../models/Buyer";
import { CreditCardInputDTO } from "../models/CreditCard";
import { HolderInputDTO } from "../models/Holder";
import { PaymentInputDTO, PAYMENT_METHODS } from "../models/Payment";
import { CodePaymentGenerator } from "../services/CodePaymentGenerator";
import { ExpirationDateGenerator } from "../services/ExpirationDateGenerator";
import { IdGenerator } from "../services/IdGenerator";


export class PurchaseBusiness {
    static regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    constructor() {

    };

    create = async (
        clientId: string,
        buyer: BuyerInputDTO | undefined,
        payment: PaymentInputDTO | undefined,
        holder: HolderInputDTO | undefined,
        creditCard: CreditCardInputDTO | undefined
    ): Promise<string> => {
        if (!clientId) {
            throw new CustomError(422, "'clientId' must be provided");
        };

        if (!buyer) {
            throw new CustomError(422, `'buyer' must be provided as an object with 'name',
                'email' and 'cpf' properties`
            );
        };

        if (!payment) {
            throw new CustomError(422, `'payment' must be provided as an object with 'amount',
                and 'method' properties`
            );
        };

        const { name: buyerName, email: buyerEmail, cpf: buyerCpf } = buyer as BuyerInputDTO;
        const { amount, method } = payment as PaymentInputDTO;

        if (!buyerName || !buyerEmail || !buyerCpf || typeof buyerName !== "string" ||
            typeof buyerEmail !== "string" || typeof buyerCpf !== "string") {
            throw new CustomError(422, `'name', 'email' and 'cpf' of buyer should be provided, 
                and as a string type one! Please, check input´s values`
            );
        };

        if (buyerName.length < 3) {
            throw new CustomError(422, "Buyer´s 'name' should have at least 3 words! Please, try again!");
        };

        if (!PurchaseBusiness.regExValidateEmail.test(buyerEmail)) {
            throw new CustomError(422, "Insert a valid e-mail to buyer, such as: 'xxxx@yyyyy.zzz.www");
        };

        if (buyerCpf.length !== 11) {
            throw new CustomError(422, `Buyer 'cpf' should have exactly 11 numbers in a string format type!
                Please, try again`
            );
        };

        if (!amount || !method) {
            throw new CustomError(422, `'amount' and 'method' of payment should be provided! Please, check
                input´s values`
            );
        };

        if (typeof amount !== "number") {
            throw new CustomError(422, `'amount' should be a number type input! Please, check input value`);
        };

        if(method !== PAYMENT_METHODS.BOLETO && method !== PAYMENT_METHODS.CREDIT_CARD) {
            throw new CustomError(422, `Payment 'method' is only allowed to 'BOLETO' or 'CREDIT_CARD'! Please, try again`);
        };

        const clientDatabase = new ClientDatabase();
        const isClientAlreadyExist = await clientDatabase.findClientById(clientId);

        if(!isClientAlreadyExist) {
            throw new CustomError(422, `Client hasn´t been found! Please, check 'clientId'`);
        };

        const buyerDatabase = new BuyerDatabase();
        const isBuyerAlreadyExist = await buyerDatabase.findBuyerByEmail(buyerEmail);

        const idGenerator = new IdGenerator();

        if (!isBuyerAlreadyExist) {
            const newBuyerId = idGenerator.generateId();

            const newBuyer = new Buyer(newBuyerId, buyerName, buyerEmail, buyerCpf);
            await buyerDatabase.createBuyer(newBuyer);
        };

        if (method === "BOLETO") {
            const newBoletoId = idGenerator.generateId();

            const codePayment = new CodePaymentGenerator();
            const newCodePayment = codePayment.generate();

            const expirationDate = new ExpirationDateGenerator();
            const newExpirationDate = expirationDate.generate();

            const newBoleto = new Boleto(newBoletoId, newCodePayment, newExpirationDate);

            const boletoDatabase = new BoletoDatabase();
            await boletoDatabase.createBoleto(newBoleto);
            
            return newBoleto.getCode();
        } else {
            if (!holder) {
                throw new CustomError(422, `'holder' must be provided as an object with 'name',
                    'birthDate' and 'documentNumber' properties when payment´s method is 'CREDIT_CARD'`);
            };

            if (!creditCard) {
                throw new CustomError(422, `'creditCard' must be provided as an object with 'amount',
                    and 'method' properties when payment´s method is 'CREDIT_CARD'`);
            };

            const { name: holderName, birthDate: holderBirth, documentNumber: holderRegister } = holder as HolderInputDTO;
            const { brand, cardNumber, expirationDate, cvv } = creditCard as CreditCardInputDTO;

            return "RESPOSTA CREDIT CARD"
        };
    };
};