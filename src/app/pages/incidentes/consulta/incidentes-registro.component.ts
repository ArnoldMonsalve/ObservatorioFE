import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'devextreme/data/odata/store';
import { IncidenteDTO } from 'src/app/shared/interfaces/incidente';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  templateUrl: 'incidentes-consulta.component.html'
})

export class IncidentesConsultaComponent {
  dataSource: any = [];
  categoryDataSource : any = [];
  productoDataSource : any = [];
  impactoDataSource : any = [];
  departamentoDataSource : any = [];
  municipioDataSource : any = [];
  priority: any[];
  expandedRowKey:any;

  Incidente: IncidenteDTO = new IncidenteDTO();

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
    this.loadDepartamento();
    this.loadImpactos();
    this.loadMunicipio();
    this.loadProductos();
  }

  TraerDatos() {
    this.observatorio__.MostrarIncidente(this.Incidente.id).subscribe(
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
    this.observatorio__.MostrarCategoriaIncidente(0).subscribe(
      data => {
        this.categoryDataSource = data;
        console.log(this.categoryDataSource);
    });
  }

  loadProductos() {debugger
    this.observatorio__.MostrarProducto(0).subscribe(
      data => {
        this.productoDataSource = data;
        console.log(this.productoDataSource);
    });
  }

  loadImpactos() {debugger
    this.observatorio__.MostrarImpactos(0).subscribe(
      data => {
        this.impactoDataSource = data;
        console.log(this.impactoDataSource);
    });
  }

  loadDepartamento() {debugger
    this.observatorio__.MostrarDepartamentos().subscribe(
      data => {
        this.departamentoDataSource = data;
        console.log(this.departamentoDataSource);
    });
  }

  loadMunicipio() {debugger
    this.observatorio__.MostrarCiudades(1).subscribe(
      data => {
        this.municipioDataSource = data;
        console.log(this.municipioDataSource);
    });
  }

  guardarCambios(event: any) {debugger

    this.Incidente = Object.assign(event.oldData, event.newData);
    this.observatorio__.Actualizar5(this.Incidente).subscribe(
      {
        next: data => {
        },
        error: (error) => {

        }
      });
  }

  Borrar(event: any){
    this.observatorio__.Eliminar5(event.data.id).subscribe(
      {
        next: data => {

        },
        error: (error) => {

        }
      });
  }

  Crear(event: any) {debugger

    event.data.id=0;
    this.Incidente=event.data;

    this.observatorio__.Guardar5(this.Incidente).subscribe(
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
