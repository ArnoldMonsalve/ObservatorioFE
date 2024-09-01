import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'categoria-incidente-registro.component.html'
})
export class CategoriaIncidenteRegistroComponent {
  formData = {
    nombre: '',
    descripcion: ''
  };

  guardar(form: NgForm) {
    console.log('Valores del formulario:', form.value);
  }
}
