export interface ICategoriaProductoDTO{
  id : number;
  nombre : string;
  descripcion : string;
  fechaRegistro: Date;
  idUsuario : number
  fechaActualizacion : Date;
}

export class CategoriaProductoDTO implements ICategoriaProductoDTO {
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
