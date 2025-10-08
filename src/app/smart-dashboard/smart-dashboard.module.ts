import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SmartDashboardPageRoutingModule } from './smart-dashboard-routing.module';
import { SmartDashboardPage } from './smart-dashboard.page';
import { BtnNavigationbarComponent } from '../shared/btn-navigationbar/btn-navigationbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartDashboardPageRoutingModule,
    BtnNavigationbarComponent  
  ],
  declarations: [SmartDashboardPage],
})
export class SmartDashboardPageModule {}
