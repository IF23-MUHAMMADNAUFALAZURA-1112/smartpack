import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; 

import { SmartForgotPageRoutingModule } from './smart-forgot-routing.module';
import { SmartForgotPage } from './smart-forgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, 
    SmartForgotPageRoutingModule
  ],
  declarations: [SmartForgotPage]
})
export class SmartForgotPageModule {}
