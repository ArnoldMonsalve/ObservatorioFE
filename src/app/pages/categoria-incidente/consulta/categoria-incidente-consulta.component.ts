import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'devextreme/data/odata/store';
import { CategoriaIncidenteDTO } from 'src/app/shared/interfaces/categoria-incidente';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  templateUrl: 'categoria-incidente-consulta.component.html'
})

export class CategoriaIncidenteConsultaComponent {
  dataSource: any = [];
  priority: any[];
  expandedRowKey:any;

  CategoriaIncidente: CategoriaIncidenteDTO = new CategoriaIncidenteDTO();

  constructor(private observatorio__: ObservatorioService, private router: Router) {
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }

  ngOnInit(): void {
    this.TraerDatos();
  }

  TraerDatos() {
    this.observatorio__.MostrarCategoriaIncidente(this.CategoriaIncidente.id).subscribe(
      {
        next: data => {
          this.dataSource = data;
        },
        error: (error) => {
          alert(error.message);
        }
      });
  }

  guardarCambios(event: any) {debugger

    this.CategoriaIncidente = Object.assign(event.oldData, event.newData);
    this.observatorio__.Actualizar3(this.CategoriaIncidente).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        }
      });
  }

  Borrar(event: any){
    this.observatorio__.Eliminar3(event.data.id).subscribe(
      {
        next: data => {

        },
        error: (error) => {

        }
      });
  }

  Crear(event: any) {debugger

    event.data.id=0;
    this.CategoriaIncidente=event.data;

    this.observatorio__.Guardar3(this.CategoriaIncidente).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        },
        complete: () => {
          this.TraerDatos();
        }
      });
  }
}
