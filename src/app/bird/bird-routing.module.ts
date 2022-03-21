import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdPage } from './bird.page';

const routes: Routes = [
  {
    path: '',
    component: BirdPage
  },
  {
    path: 'bird-details',
    loadChildren: () => import('./bird-details/bird-details.module').then( m => m.BirdDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdPageRoutingModule {}
