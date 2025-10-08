import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSmartpackPageRoutingModule } from './home-smartpack-routing.module';

import { HomeSmartpackPage } from './home-smartpack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSmartpackPageRoutingModule
  ],
  declarations: [HomeSmartpackPage]
})
export class HomeSmartpackPageModule {}
