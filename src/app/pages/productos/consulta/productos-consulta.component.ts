import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'devextreme/data/odata/store';
import { ProductoDTO } from 'src/app/shared/interfaces/producto';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  templateUrl: 'productos-consulta.component.html'
})

export class ProductosConsultaComponent {
  dataSource: any = [];
  categoryDataSource : any = [];
  priority: any[];
  expandedRowKey:any;

  Producto: ProductoDTO = new ProductoDTO();

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
    this.loadCategories();
  }

  TraerDatos() {
    this.observatorio__.MostrarProducto(this.Producto.id).subscribe(
      {
        next: data => {
          this.dataSource = data;
          console.log(this.dataSource);

        },
        error: (error) => {
          alert(error.message);
        }
      });
  }

  loadCategories() {debugger
    this.observatorio__.MostrarCategoriaProducto(0).subscribe(
      data => {
        this.categoryDataSource = data;
        console.log(this.categoryDataSource);
    });
  }

  guardarCambios(event: any) {debugger

    this.Producto = Object.assign(event.oldData, event.newData);
    this.observatorio__.Actualizar4(this.Producto).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        }
      });
  }

  Borrar(event: any){
    this.observatorio__.Eliminar4(event.data.id).subscribe(
      {
        next: data => {

        },
        error: (error) => {

        }
      });
  }

  Crear(event: any) {debugger

    event.data.id=0;
    this.Producto=event.data;

    this.observatorio__.Guardar4(this.Producto).subscribe(
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
