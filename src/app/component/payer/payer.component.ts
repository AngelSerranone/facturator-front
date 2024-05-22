import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { PayerService } from '../../service/payer.service';
import { CustomValidators } from '../../utils/custom-validators';
import { Payer } from '../../model/payer';

@Component({
  selector: 'app-Payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PayerComponent implements OnInit {

  form: FormGroup;

  name: FormControl;
  nif: FormControl;
  address: FormControl;
  zipCode: FormControl;
  city: FormControl;
  province: FormControl;

  checked = false;

  constructor(
    private payerService: PayerService,
  ) {
    
    // Initialize formControl
    this.name = new FormControl ('', [Validators.required, CustomValidators.nameValidator]);
    this.nif = new FormControl ('', [Validators.required]);
    this.address = new FormControl ('', [Validators.required]);
    this.zipCode = new FormControl ('', [Validators.required]);
    this.city = new FormControl('', [Validators.required]);
    this.province = new FormControl('', [Validators.required]);

    // Initialize formGroup
    this.form = new FormGroup({
      name: this.name,
      nif: this.nif,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
      province: this.province
    });
   }

  ngOnInit(): void {
  }

  storePayer(formDirective: FormGroupDirective) : void {
    let payer: Payer = new Payer(
      this.name.value, 
      this.nif.value, 
      this.address.value, 
      this.zipCode.value,
      this.city.value,
      this.province.value
    );
    this.payerService.storePayer(payer);
    this.form.reset();
    formDirective.resetForm();
    alert("Nuevo pagador añadido correctamente");
  }
}
