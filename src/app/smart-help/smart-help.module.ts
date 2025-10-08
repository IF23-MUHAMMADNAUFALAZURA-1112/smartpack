import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartHelpPageRoutingModule } from './smart-help-routing.module';

import { SmartHelpPage } from './smart-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartHelpPageRoutingModule
  ],
  declarations: [SmartHelpPage]
})
export class SmartHelpPageModule {}
