import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartNotifikasiPage } from './smart-notifikasi.page';

const routes: Routes = [
  {
    path: '',
    component: SmartNotifikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartNotifikasiPageRoutingModule {}
