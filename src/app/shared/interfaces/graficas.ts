export interface IGraficaDTO{
  encabezado : string;
  cantidad : number;

}

export class GraficaDTO implements IGraficaDTO {
  public encabezado : string;
  public cantidad : number;

  constructor() {
      this.encabezado = '';
      this.cantidad = 0;
  };
}
