import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreeDetailsPageRoutingModule } from './tree-details-routing.module';

import { TreeDetailsPage } from './tree-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreeDetailsPageRoutingModule
  ],
  declarations: [TreeDetailsPage]
})
export class TreeDetailsPageModule {}
