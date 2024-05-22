import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payer } from '../model/payer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayerService {

  constructor(
    private http: HttpClient
  ) { }

  /** Method to get all payers from database */
  getAllPayers(): Observable<Payer[]> {
    return this.http.get<Payer[]>('http://localhost:5005/payers');
  }

  /** Method to store payers in database **/
  storePayer(payer: Payer): void {
    this.http.post('http://localhost:5005/add_payer', this.body(payer)).subscribe(data =>
    console.log('Payer stored succesfully'));
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
