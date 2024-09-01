import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImpactoDTO } from 'src/app/shared/interfaces/impacto';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  templateUrl: 'impacto-consulta.component.html'
})
export class ImpactoConsultaComponent implements OnInit {
  dataSource: any = [];
  priority: any[];
  expandedRowKey:any;

  impacto: ImpactoDTO = new ImpactoDTO();

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
    this.observatorio__.MostrarImpactos(this.impacto.id).subscribe(
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
    this.impacto = Object.assign(event.oldData, event.newData);
    this.observatorio__.Actualizar(this.impacto).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        }
      });
  }

  Borrar(event: any){
    this.observatorio__.Eliminar(event.data.id).subscribe(
      {
        next: data => {

        },
        error: (error) => {

        }
      });
  }

  Crear(event: any) {debugger

    event.data.id=0;
    this.impacto=event.data;

    this.observatorio__.Guardar(this.impacto).subscribe(
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
