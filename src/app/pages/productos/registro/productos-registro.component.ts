import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'productos-registro.component.html'
})
export class ProductosRegistroComponent {
  formData = {
    nombre:'',
    categoria: '',
    fabricante:'',
    descripcion: '',
  };

  guardar(form: NgForm) {
    console.log('Valores del formulario:', form.value);
  }
}
