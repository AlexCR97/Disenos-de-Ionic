import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab-inicio',
        loadChildren: () => import('../tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'tab-buscar',
        loadChildren: () => import('../tab-buscar/tab-buscar.module').then( m => m.TabBuscarPageModule)
      },
      {
        path: 'tab-notificaciones',
        loadChildren: () => import('../tab-notificaciones/tab-notificaciones.module').then( m => m.TabNotificacionesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
