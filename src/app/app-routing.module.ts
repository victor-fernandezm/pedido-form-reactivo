import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidosComponent } from './form-pedidos/form-pedidos.component';
import { FormProductosComponent } from './form-productos/form-productos.component';

const routes: Routes = [
  {path: '', component: FormPedidosComponent, children: [
    {path: 'detalle', component: FormProductosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
