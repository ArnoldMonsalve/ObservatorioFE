import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'categoria-producto-registro.component.html'
})
export class CategoriaProductoRegistroComponent {
  formData = {
    nombre: '',
    descripcion: ''
  };

  guardar(form: NgForm) {
    console.log('Valores del formulario:', form.value);
  }
}
