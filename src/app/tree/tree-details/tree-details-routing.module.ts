import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeDetailsPage } from './tree-details.page';

const routes: Routes = [
  {
    path: '',
    component: TreeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeDetailsPageRoutingModule {}
