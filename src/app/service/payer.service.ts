import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payer } from '../model/payer';

@Injectable({
  providedIn: 'root'
})
export class PayerService {

  constructor(
    private http: HttpClient
  ) { }

  /** Method to store payers in database **/
  storePayer(payer: Payer): void {
    this.http.post('http://localhost:5005/add_payer', this.body(payer)).subscribe(data =>
    console.log('Stored contact'));
  }
  
  /** Method to create the payer body */
  body(payer: Payer): any{
    let payerBody: any = {
      name: payer.name,
      nif: payer.nif,
      address: payer.address,
      zip_code: payer.zipCode,
      city: payer.city,
      province: payer.province
    }
    return payerBody;
  }
}
