import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-invoice-order',
  templateUrl: './invoice-order.component.html',
  styleUrl: './invoice-order.component.css',
  encapsulation: ViewEncapsulation.None
})
export class InvoiceOrderComponent {
  
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onAccept(): void {
    // Agregar lógica para manejar el archivo seleccionado
    console.log('Archivo seleccionado:', this.selectedFile);

    // input para el usuario
    alert("Orden de pago generada correctamente");

    // Borrar la selección del archivo
    this.selectedFile = null;
    (document.getElementById('fileInput') as HTMLInputElement).value = '';
  }
}
