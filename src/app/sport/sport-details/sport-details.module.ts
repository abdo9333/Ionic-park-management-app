import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportDetailsPageRoutingModule } from './sport-details-routing.module';

import { SportDetailsPage } from './sport-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportDetailsPageRoutingModule
  ],
  declarations: [SportDetailsPage]
})
export class SportDetailsPageModule {}
