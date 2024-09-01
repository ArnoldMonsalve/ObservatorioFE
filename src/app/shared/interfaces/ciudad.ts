export interface ICiudadDTO{
  id : number;
  nombre : string;
  idDepartamento : number;
  fechaRegistro: Date;
  idUsuario : number
  fechaActualizacion : Date;
}

export class CiudadDTO implements ICiudadDTO {
  public  id : number;
  public  nombre : string;
  public  idDepartamento : number;
  public  fechaRegistro: Date;
  public  idUsuario : number;
  public  fechaActualizacion : Date;

  constructor() {
      this.id = 0;
      this.nombre = '';
      this.idDepartamento = 0;
      this.fechaRegistro = new Date();
      this.idUsuario = 0;
      this.fechaActualizacion = new Date()
  };
}
