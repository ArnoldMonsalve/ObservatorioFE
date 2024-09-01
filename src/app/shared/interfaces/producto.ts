export interface IProductoDTO{
  id : number;
  nombre : string;
  idCategoriaProducto : number;
  descripcion : string;
  fabricante : string;
  fechaRegistro: Date;
  idUsuario : number
  fechaActualizacion : Date;
}

export class ProductoDTO implements IProductoDTO {
  public  id : number;
  public  nombre : string;
  public  idCategoriaProducto : number;
  public  fabricante : string;
  public  descripcion : string;
  public  fechaRegistro: Date;
  public  idUsuario : number;
  public  fechaActualizacion : Date;

  constructor() {
      this.id = 0;
      this.nombre = '';
      this.idCategoriaProducto=0;
      this.fabricante='';
      this.descripcion = '';
      this.fechaRegistro = new Date();
      this.idUsuario = 0;
      this.fechaActualizacion = new Date()
  };
}
