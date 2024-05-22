import { Component } from '@angular/core';
import { Payer } from '../../model/payer';
import { PayerService } from '../../service/payer.service';

@Component({
  selector: 'app-payer-list',
  templateUrl: './payer-list.component.html',
  styleUrl: './payer-list.component.css'
})
export class PayerListComponent {
  payerList: Payer[] = [];
  itemList: String[] = ["Item 1", "Item 2", "Item 3"];

  constructor(
    private payerService: PayerService,
  ) {}

  ngOnInit(): void {
    this.getAllPayers()
  }

  /** Get all payers **/
  getAllPayers(): void {
    this.payerService.getAllPayers().subscribe(result =>{
      for(let payer of result) {
        this.payerList.push(payer);
      }
    });
  }

  /** Get all items. BORRARRRRRRRRRRRRRRRRRRR **/
  getAllItems(): void {
    for(let item of this.itemList) {
      this.itemList.push(item);
    }
  }
}
