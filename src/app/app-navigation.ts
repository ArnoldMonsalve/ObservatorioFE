export const navigation = [
  {
    text: 'Dashboard',
    path: '/home',
    icon: 'chart'
  },
  {
    text: 'Configuracion',
    icon: 'preferences',
    items: [
      {
        text: 'Impacto',
        path: '/impacto-consulta'
      },
      {
        text: 'Categoria Producto',
        path: '/categoria-producto-consulta'
      },
      {
        text: 'Producto',
        path: '/productos-consulta'
      },
      {
        text: 'Categoria Incidente',
        path: '/categoria-incidente-consulta'
      }
    ]
  },
  {
    text: 'Reportar',
    path: '/incidentes-consulta',
    icon: 'taskinprogress'
  }
];
