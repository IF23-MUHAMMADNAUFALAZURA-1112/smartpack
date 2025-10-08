import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-navigationbar',
  templateUrl: './btn-navigationbar.component.html',
  styleUrls: ['./btn-navigationbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BtnNavigationbarComponent {
  // Tambahan: state tab aktif
  activeTab: string = 'home'; // default Home biru

  constructor(private router: Router) {
    // Navigasi langsung ke Home saat awal
    this.router.navigate(['/dashboard']);
  }

  // Tambahan: method untuk berpindah tab
  setActiveTab(tab: string) {
    this.activeTab = tab;

    switch(tab) {
      case 'home':
        this.router.navigate(['/dashboard']);
        break;
      case 'daftar-wo':
        this.router.navigate(['/daftar-wo']);
        break;
      case 'sop-packing':
        this.router.navigate(['/sop-packing']);
        break;
      case 'laporan-harian':
        this.router.navigate(['/laporan-harian']);
        break;
    }
  }
}
