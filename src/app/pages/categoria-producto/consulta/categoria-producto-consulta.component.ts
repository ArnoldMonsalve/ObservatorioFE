import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'devextreme/data/odata/store';
import { CategoriaProductoDTO } from 'src/app/shared/interfaces/categoria-producto';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  templateUrl: 'categoria-producto-consulta.component.html'
})

export class CategoriaProductoConsultaComponent {
  dataSource: any = [];
  priority: any[];
  expandedRowKey:any;

  CategoriaProducto: CategoriaProductoDTO = new CategoriaProductoDTO();

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
    this.observatorio__.MostrarCategoriaProducto(this.CategoriaProducto.id).subscribe(
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

    this.CategoriaProducto = Object.assign(event.oldData, event.newData);
    this.observatorio__.Actualizar2(this.CategoriaProducto).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        }
      });
  }

  Borrar(event: any){
    this.observatorio__.Eliminar2(event.data.id).subscribe(
      {
        next: data => {

        },
        error: (error) => {

        }
      });
  }

  Crear(event: any) {debugger

    event.data.id=0;
    this.CategoriaProducto=event.data;

    this.observatorio__.Guardar2(this.CategoriaProducto).subscribe(
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
