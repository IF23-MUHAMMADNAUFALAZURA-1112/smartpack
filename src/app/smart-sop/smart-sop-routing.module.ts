import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartSopPage } from './smart-sop.page';

const routes: Routes = [
  {
    path: '',
    component: SmartSopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartSopPageRoutingModule {}
