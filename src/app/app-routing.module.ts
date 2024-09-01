import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxButtonModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxTreeListModule } from 'devextreme-angular';
import { CategoriaIncidenteConsultaComponent } from './pages/categoria-incidente/consulta/categoria-incidente-consulta.component';
import { CategoriaIncidenteRegistroComponent } from './pages/categoria-incidente/registro/categoria-incidente-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaProductoConsultaComponent } from './pages/categoria-producto/consulta/categoria-producto-consulta.component';
import { CategoriaProductoRegistroComponent } from './pages/categoria-producto/registro/categoria-producto-registro.component';
import { ImpactoConsultaComponent } from './pages/impacto/consulta/impacto-consulta.component';
import { ImpactoRegistroComponent } from './pages/impacto/registro/impacto-registro.component';
import { IncidentesConsultaComponent } from './pages/incidentes/consulta/incidentes-registro.component';
import { IncidenteRegistroComponent } from './pages/incidentes/registro/incidentes-registro.component';
import { ProductosConsultaComponent } from './pages/productos/consulta/productos-consulta.component';
import { ProductosRegistroComponent } from './pages/productos/registro/productos-registro.component';
import { CommonModule } from '@angular/common';
import { DxiItemModule, DxiRowModule, DxoSeriesTemplateModule } from 'devextreme-angular/ui/nested';

const routes: Routes = [
  {
    path: 'categoria-producto-consulta',
    component: CategoriaProductoConsultaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categoria-producto-registro',
    component: CategoriaProductoRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categoria-producto-registro/:id',
    component: CategoriaProductoRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'productos-consulta',
    component: ProductosConsultaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'productos-registro',
    component: ProductosRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'productos-registro/:id',
    component: ProductosRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categoria-incidente-consulta',
    component: CategoriaIncidenteConsultaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categoria-incidente-registro',
    component: CategoriaIncidenteRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categoria-incidente-registro/:id',
    component: CategoriaIncidenteRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'incidentes-consulta',
    component: IncidentesConsultaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'incidentes-registro',
    component: IncidenteRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'incidentes-registro/:id',
    component: IncidenteRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'impacto-consulta',
    component: ImpactoConsultaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'impacto-registro',
    component: ImpactoRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'impacto-registro/:id',
    component: ImpactoRegistroComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxiItemModule,
    DxiRowModule,
    DxTreeListModule,
    DxoSeriesTemplateModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxChartModule,
    DxCheckBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    CategoriaIncidenteConsultaComponent,
    CategoriaIncidenteRegistroComponent,
    ProductosConsultaComponent,
    IncidentesConsultaComponent,
    CategoriaProductoRegistroComponent,
    CategoriaProductoConsultaComponent,
    ImpactoRegistroComponent,
    ImpactoConsultaComponent,
    IncidenteRegistroComponent,
    ProductosRegistroComponent
  ]
})
export class AppRoutingModule { }
