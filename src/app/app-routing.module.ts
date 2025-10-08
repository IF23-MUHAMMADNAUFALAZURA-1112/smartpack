import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-smartpack',
    pathMatch: 'full'
  },
  {
    path: 'home-smartpack',
    loadChildren: () => import('./home-smartpack/home-smartpack.module').then(m => m.HomeSmartpackPageModule)
  },
  {
    path: 'login-smartpack',
    loadChildren: () => import('./login-smartpack/login-smartpack.module').then(m => m.LoginSmartpackPageModule)
  },
  {
    path: 'smart-registrasi',
    loadChildren: () => import('./smart-registrasi/smart-registrasi.module').then(m => m.SmartRegistrasiPageModule)
  },
  {
    path: 'smart-dashboard',
    loadChildren: () => import('./smart-dashboard/smart-dashboard.module').then(m => m.SmartDashboardPageModule),
    data: { showNavbar: true }
  },
  {
    path: 'smart-forgot',
    loadChildren: () => import('./smart-forgot/smart-forgot.module').then(m => m.SmartForgotPageModule)
  },
  {
    path: 'smart-help',
    loadChildren: () => import('./smart-help/smart-help.module').then(m => m.SmartHelpPageModule)
  },
  {
    path: 'smart-notifikasi',
    loadChildren: () => import('./smart-notifikasi/smart-notifikasi.module').then(m => m.SmartNotifikasiPageModule)
  },
  {
    path: 'smart-sop',
    loadChildren: () => import('./smart-sop/smart-sop.module').then(m => m.SmartSopPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
