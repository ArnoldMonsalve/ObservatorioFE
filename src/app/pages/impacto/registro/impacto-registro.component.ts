import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'impacto-registro.component.html'
})
export class ImpactoRegistroComponent {
  formData = {
    riesgo: '',
    descripcion: ''
  };

  guardar(form: NgForm) {
    console.log('Valores del formulario:', form.value);
  }
}
