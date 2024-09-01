import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'incidentes-registro.component.html'
})
export class IncidenteRegistroComponent {
  formData = {
    fecha: '',
    descripcion: '',
    impacto:'',
    estado:'',
    producto:'',
    medida:'',
    departamento:'',
    municipio:''
  };

  guardar(form: NgForm) {
    console.log('Valores del formulario:', form.value);
  }
}
