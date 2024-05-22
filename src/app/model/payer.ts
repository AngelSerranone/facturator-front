export class Payer {

    constructor(
        private _name: string,
        private _nif: string,
        private _address: string,
        private _zipCode: number,
        private _city: string,     
        private _province: string,     
    ){}

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get nif(): string {
        return this._nif;
    }
    public set nif(value: string) {
        this._nif = value;
    }

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get zipCode(): number {
        return this._zipCode;
    }
    public set zipCode(value: number) {
        this._zipCode = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    public get province(): string {
        return this._province;
    }
    public set province(value: string) {
        this._province = value;
    }
}
