import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartRegistrasiPageRoutingModule } from './smart-registrasi-routing.module';

import { SmartRegistrasiPage } from './smart-registrasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartRegistrasiPageRoutingModule
  ],
  declarations: [SmartRegistrasiPage]
})
export class SmartRegistrasiPageModule {}
