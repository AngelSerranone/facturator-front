export class InvoiceOrder {

    constructor(
        private _payerName: string,
        private _date: string,
        private _quantity: number,     
        private _number: number,
    ){}

    public get payerName(): string {
        return this._payerName;
    }
    public set payerName(value: string) {
        this._payerName = value;
    }

    public get number_1(): number {
        return this._number;
    }
    public set number_1(value: number) {
        this._number = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
}
