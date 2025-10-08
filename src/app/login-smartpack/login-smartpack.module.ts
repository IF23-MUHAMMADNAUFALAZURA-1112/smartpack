import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginSmartpackPageRoutingModule } from './login-smartpack-routing.module';
import { LoginSmartpackPage } from './login-smartpack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSmartpackPageRoutingModule
  ],
  declarations: [LoginSmartpackPage]
})
export class LoginSmartpackPageModule {}
