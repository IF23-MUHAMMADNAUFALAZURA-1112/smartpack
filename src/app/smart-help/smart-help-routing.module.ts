import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartHelpPage } from './smart-help.page';

const routes: Routes = [
  {
    path: '',
    component: SmartHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartHelpPageRoutingModule {}
