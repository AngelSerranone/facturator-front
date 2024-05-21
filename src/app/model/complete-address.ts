export class CompleteAddress {

    constructor(
        private _address: string,
        private _apartmentNumber: string,
        private _zipCode: number,
        private _city: string,     
        private _province: string,
    ){}

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get apartmentNumber(): string {
        return this._apartmentNumber;
    }
    public set apartmentNumber(value: string) {
        this._apartmentNumber = value;
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
