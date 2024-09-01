import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaIncidenteDTO } from '../interfaces/categoria-incidente';
import { CategoriaProductoDTO } from '../interfaces/categoria-producto';
import { CiudadDTO } from '../interfaces/ciudad';
import { DepartamentoDTO } from '../interfaces/departamento';
import { GraficaDTO } from '../interfaces/graficas';
import { ImpactoDTO } from '../interfaces/impacto';
import { IncidenteDTO } from '../interfaces/incidente';
import { ProductoDTO } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ObservatorioService {
  private apiUrl :string = environment.API_URL;
  constructor( private http: HttpClient ) { }

  //IMPACTO
  MostrarImpactos(id?: number) {
    return this.http.get(`${this.apiUrl}/Impacto?id=${id}`)
  }

  Guardar(impacto: ImpactoDTO){
    return this.http.post(this.apiUrl+'/Impacto',impacto)
  }

  Actualizar(impacto: ImpactoDTO){debugger
    return this.http.put(this.apiUrl+'/Impacto',impacto)
  }

  Eliminar(id: number){
    return this.http.delete(`${this.apiUrl}/Impacto?id=${id}`)
  }

  //CATEGORIA PRODUCTO
  MostrarCategoriaProducto(id?: number) {
    return this.http.get(`${this.apiUrl}/CategoriaProducto?id=${id}`)
  }

  Guardar2(CategoriaProducto: CategoriaProductoDTO){
    return this.http.post(this.apiUrl+'/CategoriaProducto',CategoriaProducto)
  }

  Actualizar2(CategoriaProducto: CategoriaProductoDTO){debugger
    return this.http.put(this.apiUrl+'/CategoriaProducto',CategoriaProducto)
  }

  Eliminar2(id: number){
    return this.http.delete(`${this.apiUrl}/CategoriaProducto?id=${id}`)
  }

  //CATEGORIA INCIDENTE
  MostrarCategoriaIncidente(id?: number) {
    return this.http.get(`${this.apiUrl}/CategoriaIncidente?id=${id}`)
  }

  Guardar3(CategoriaIncidente: CategoriaIncidenteDTO){
    return this.http.post(this.apiUrl+'/CategoriaIncidente',CategoriaIncidente)
  }

  Actualizar3(CategoriaIncidente: CategoriaIncidenteDTO){debugger
    return this.http.put(this.apiUrl+'/CategoriaIncidente',CategoriaIncidente)
  }

  Eliminar3(id: number){
    return this.http.delete(`${this.apiUrl}/CategoriaIncidente?id=${id}`)
  }

  //PRODUCTOS
  MostrarProducto(id?: number) {
    return this.http.get(`${this.apiUrl}/Productos?id=${id}`)
  }

  Guardar4(Producto: ProductoDTO){
    return this.http.post(this.apiUrl+'/Productos',Producto)
  }

  Actualizar4(Producto: ProductoDTO){debugger
    return this.http.put(this.apiUrl+'/Productos',Producto)
  }

  Eliminar4(id: number){
    return this.http.delete(`${this.apiUrl}/Productos?id=${id}`)
  }

  //INCIDENTES
  MostrarIncidente(id?: number) {
    return this.http.get(`${this.apiUrl}/Incidente?id=${id}`)
  }

  Guardar5(Incidente: IncidenteDTO){
    return this.http.post(this.apiUrl+'/Incidente',Incidente)
  }

  Actualizar5(Incidente: IncidenteDTO){debugger
    return this.http.put(this.apiUrl+'/Incidente',Incidente)
  }

  Eliminar5(id: number){
    return this.http.delete(`${this.apiUrl}/Incidente?id=${id}`)
  }

  //DEPARTAMENTO
  MostrarDepartamentos() {
    return this.http.get<Array<DepartamentoDTO>>(this.apiUrl+'/Departamento')
  }

  //MUNICIPIO
  MostrarCiudades(idDptoSel : number){
    return this.http.get<Array<CiudadDTO>>(`${this.apiUrl}/Ciudad?idDpto=${idDptoSel}`)
  }

  //GRAFICAS
  Mostrargrafica(Opcion: number) {
    return this.http.get<Array<GraficaDTO>>(`${this.apiUrl}/Graficas?Opcion=${Opcion}`)
  }
}
