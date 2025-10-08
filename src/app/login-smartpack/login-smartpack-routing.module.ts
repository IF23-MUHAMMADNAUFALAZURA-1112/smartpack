import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSmartpackPage } from './login-smartpack.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSmartpackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSmartpackPageRoutingModule {}
