import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartNotifikasiPageRoutingModule } from './smart-notifikasi-routing.module';

import { SmartNotifikasiPage } from './smart-notifikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartNotifikasiPageRoutingModule
  ],
  declarations: [SmartNotifikasiPage]
})
export class SmartNotifikasiPageModule {}
