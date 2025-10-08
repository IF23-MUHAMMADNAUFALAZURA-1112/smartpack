import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartDashboardPage } from './smart-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SmartDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartDashboardPageRoutingModule {}
