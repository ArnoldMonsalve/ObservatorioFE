export interface IIncidenteDTO {
  id: number;
  idCategoria: number;
  fecha: Date;
  descripcion: string;
  idImpacto: number;
  idProducto: number;
  medidasTomadas: string;
  idDepartamento: number;
  idMunicipio: number;
  idUsuario: number;
  fechaActualizacion: Date;
}

export class IncidenteDTO implements IIncidenteDTO {
  public id: number;
  public idCategoria: number;
  public fecha: Date;
  public descripcion: string;
  public idImpacto: number;
  public idProducto: number;
  public medidasTomadas: string;
  public idDepartamento: number;
  public idMunicipio: number;
  public idUsuario: number;
  public fechaActualizacion: Date;

  constructor() {
    this.id = 0;
    this.idCategoria = 0;
    this.fecha = new Date();
    this.descripcion = '';
    this.idImpacto = 0;
    this.idProducto = 0;
    this.medidasTomadas = '';
    this.idDepartamento = 0;
    this.idMunicipio = 0;
    this.idUsuario = 0;
    this.fechaActualizacion = new Date();
  }
}
