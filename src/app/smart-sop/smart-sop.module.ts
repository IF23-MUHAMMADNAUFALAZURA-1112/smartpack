import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SmartSopPageRoutingModule } from './smart-sop-routing.module';
import { SmartSopPage } from './smart-sop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartSopPageRoutingModule
  ],
  declarations: [SmartSopPage]
})
export class SmartSopPageModule {}
