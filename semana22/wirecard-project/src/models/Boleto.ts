export class Boleto {
    constructor(
        private id: string,
        private code: string,
        private expirationDate: Date
    ){}

    getId():string {
        return this.id;
    };

    getCode():string {
        return this.code;
    };

    getExpirationDate(): Date {
        return this.expirationDate;
    };

    setId(newId:string):void {
        this.id = newId;
    };

    setCode(newCode:string):void {
        this.code = newCode;
    };

    setExpirationDate(newExpirationDate: Date):void {
        this.expirationDate = newExpirationDate;
    };

    toBoletoModel(data:any):Boleto {
        return new Boleto(data.id, data.code, data.expirationDate);
    };
};