import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { GraficaDTO } from 'src/app/shared/interfaces/graficas';
import { ObservatorioService } from 'src/app/shared/services/observatorio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('content', { static: true }) contenedorSecciones!: ElementRef<HTMLDivElement>;

  public originalChartData: GraficaDTO[] = [];
  public filteredChartData: GraficaDTO[] = [];
  public originalChartData2: GraficaDTO[] = [];
  public filteredChartData2: GraficaDTO[] = [];
  public originalChartData3: GraficaDTO[] = [];
  public filteredChartData3: GraficaDTO[] = [];
  public visible: boolean = true;
  public enable: boolean = true;

  constructor(private observatorio__: ObservatorioService) {
    this.Grafica1();
    this.Grafica2();
    this.Grafica3();
   }

  ngOnInit(): void {

  }

  Grafica1() {
    this.observatorio__.Mostrargrafica(1).subscribe({
      next: data => {
        this.originalChartData = data;  // Mantén los datos originales intactos
        this.filteredChartData = [...this.originalChartData];  // Usa una copia de los datos originales para el gráfico
        this.selectedCategories = this.originalChartData.map(d => d.encabezado);
      },
      error: (error) => {
        alert(error.message);
      },
      complete: () => {
        console.log('Data loading completed.');
      }
    });
  }

  Grafica2() {
    this.observatorio__.Mostrargrafica(2).subscribe({
      next: data => {
        this.originalChartData2 = data;  // Mantén los datos originales intactos
        this.filteredChartData2 = [...this.originalChartData2];  // Usa una copia de los datos originales para el gráfico
        this.selectedCategories2 = this.originalChartData2.map(d => d.encabezado);
      },
      error: (error) => {
        alert(error.message);
      },
      complete: () => {
        console.log('Data loading completed.');
      }
    });
  }

  Grafica3() {
    this.observatorio__.Mostrargrafica(3).subscribe({
      next: data => {
        this.originalChartData3 = data;  // Mantén los datos originales intactos
        this.filteredChartData3 = [...this.originalChartData3];  // Usa una copia de los datos originales para el gráfico
        this.selectedCategories3 = this.originalChartData3.map(d => d.encabezado);
      },
      error: (error) => {
        alert(error.message);
      },
      complete: () => {
        console.log('Data loading completed.');
      }
    });
  }

  ngAfterViewInit() {
    this.mostrarSeccion('estadisticas');
  }

  mostrarSeccion(seccionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    // Remover clase 'active' de todas las secciones
    const secciones = this.contenedorSecciones.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
    secciones.forEach((seccion: HTMLElement) => {
      seccion.classList.remove('active');
    });

    // Agregar clase 'active' a la sección seleccionada
    const seccionElemento = this.contenedorSecciones.nativeElement.querySelector(`#seccion-${seccionId}`) as HTMLElement;
    seccionElemento?.classList.add('active');

    // Remover clase 'active' de todos los botones
    const botones = document.querySelectorAll('#sidebar button') as NodeListOf<HTMLElement>;
    botones.forEach(boton => {
      boton.classList.remove('active');
    });

    // Agregar clase 'active' al botón seleccionado
    const botonElemento = document.querySelector(`#btn-${seccionId}`) as HTMLElement;
    botonElemento?.classList.add('active');
  }

  // Sección de gráficas
  selectedCategories: string[] = [];
  selectedCategories2: string[] = [];
  selectedCategories3: string[] = [];

  get filteredData() {
    return this.filteredChartData;
  }

  get filteredData2() {
    return this.filteredChartData2;
  }

  get filteredData3() {
    return this.filteredChartData3;
  }

  toggleEncabezado(encabezado: string, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedCategories.includes(encabezado)) {
        this.selectedCategories.push(encabezado);
      }
    } else {
      const index = this.selectedCategories.indexOf(encabezado);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.updateChartData();
  }

  updateChartData(): void {
    this.filteredChartData = this.originalChartData.filter(data => this.selectedCategories.includes(data.encabezado));
  }

  toggleEncabezado2(encabezado: string, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedCategories2.includes(encabezado)) {
        this.selectedCategories2.push(encabezado);
      }
    } else {
      const index = this.selectedCategories2.indexOf(encabezado);
      if (index > -1) {
        this.selectedCategories2.splice(index, 1);
      }
    }
    this.updateChartData2();
  }

  updateChartData2(): void {
    this.filteredChartData2 = this.originalChartData2.filter(data => this.selectedCategories2.includes(data.encabezado));
  }


  toggleEncabezado3(encabezado: string, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedCategories3.includes(encabezado)) {
        this.selectedCategories3.push(encabezado);
      }
    } else {
      const index = this.selectedCategories3.indexOf(encabezado);
      if (index > -1) {
        this.selectedCategories3.splice(index, 1);
      }
    }
    this.updateChartData3();
  }

  updateChartData3(): void {
    this.filteredChartData3 = this.originalChartData3.filter(data => this.selectedCategories3.includes(data.encabezado));
  }

  exportChart() {
    const chart = (document.querySelector('dx-chart') as any).instance;
    chart.exportTo('Estadísticas', 'pdf');
  }

  onExporting(e: any) {
    const doc = new jsPDF();
    doc.text('Estadísticas', 10, 10);
    doc.save('estadisticas.pdf');
    e.cancel = true;
  }

  //cards

}
