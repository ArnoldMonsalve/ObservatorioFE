export interface IDepartamentoDTO{
  id : number;
  nombre : string;
  fechaRegistro: Date;
  idUsuario : number
  fechaActualizacion : Date;
}

export class DepartamentoDTO implements IDepartamentoDTO {
  public  id : number;
  public  nombre : string;
  public  fechaRegistro: Date;
  public  idUsuario : number;
  public  fechaActualizacion : Date;

  constructor() {
      this.id = 0;
      this.nombre = '';
      this.fechaRegistro = new Date();
      this.idUsuario = 0;
      this.fechaActualizacion = new Date()
  };
}
