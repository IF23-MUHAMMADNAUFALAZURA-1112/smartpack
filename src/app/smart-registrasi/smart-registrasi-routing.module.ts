import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartRegistrasiPage } from './smart-registrasi.page';

const routes: Routes = [
  {
    path: '',
    component: SmartRegistrasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartRegistrasiPageRoutingModule {}
