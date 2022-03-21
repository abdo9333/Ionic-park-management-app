import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportDetailsPage } from './sport-details.page';

const routes: Routes = [
  {
    path: '',
    component: SportDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportDetailsPageRoutingModule {}
