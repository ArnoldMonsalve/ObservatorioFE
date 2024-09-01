export interface IImpactoDTO{
  id : number;
  nombre : string;
  descripcion : string;
  fechaRegistro: Date;
  idUsuario : number
  fechaActualizacion : Date;
}

export class ImpactoDTO implements IImpactoDTO {
  public  id : number;
  public  nombre : string;
  public  descripcion : string;
  public  fechaRegistro: Date;
  public  idUsuario : number;
  public  fechaActualizacion : Date;

  constructor() {
      this.id = 0;
      this.nombre = '';
      this.descripcion = '';
      this.fechaRegistro = new Date();
      this.idUsuario = 0;
      this.fechaActualizacion = new Date()
  };
}
