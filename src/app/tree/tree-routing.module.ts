import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreePage } from './tree.page';

const routes: Routes = [
  {
    path: '',
    component: TreePage
  },
  {
    path: 'tree-details',
    loadChildren: () => import('./tree-details/tree-details.module').then( m => m.TreeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreePageRoutingModule {}
