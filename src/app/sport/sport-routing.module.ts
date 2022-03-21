import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportPage } from './sport.page';

const routes: Routes = [
  {
    path: '',
    component: SportPage
  },
  {
    path: 'sport-details',
    loadChildren: () => import('./sport-details/sport-details.module').then( m => m.SportDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportPageRoutingModule {}
