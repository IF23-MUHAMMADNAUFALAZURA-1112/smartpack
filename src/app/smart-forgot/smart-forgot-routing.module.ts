import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartForgotPage } from './smart-forgot.page';

const routes: Routes = [
  {
    path: '',
    component: SmartForgotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartForgotPageRoutingModule {}
