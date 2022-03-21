import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandicapPage } from './handicap.page';

const routes: Routes = [
  {
    path: '',
    component: HandicapPage
  },
  {
    path: 'handicap-details',
    loadChildren: () => import('./handicap-details/handicap-details.module').then( m => m.HandicapDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandicapPageRoutingModule {}
