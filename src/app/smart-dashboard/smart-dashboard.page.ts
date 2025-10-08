import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

interface WorkOrder {
  image: string;
  productName: string;
  partNumber: string;
  woNumber: string;
  operatorCount: number;
  standardTime: number;
  status: string;
}

@Component({
  selector: 'app-smart-dashboard',
  templateUrl: './smart-dashboard.page.html',
  styleUrls: ['./smart-dashboard.page.scss'],
  standalone: false
})
export class SmartDashboardPage implements OnInit {
  totalProduk = 0;
  selesaiProduk = 0;
  totalMenit = 0;
  totalJam = 0;
  workOrders: WorkOrder[] = [];

  // === Popover Profil ===
  isPopoverOpen = false;
  popoverEvent: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private popoverCtrl: PopoverController
  ) {}
goToSmartHelp() {
  this.router.navigate(['/smart-help']);
}
goToSmartNotifikasi() {
  this.router.navigate(['/smart-notifikasi']);
}

  ngOnInit() {
    this.workOrders = [
      {
        image: 'assets/products/prod1.jpg',
        productName: 'Product A',
        partNumber: 'PN-001',
        woNumber: 'WO-1001',
        operatorCount: 3,
        standardTime: 480,
        status: 'Proses',
      },
      {
        image: 'assets/products/prod2.jpg',
        productName: 'Product B',
        partNumber: 'PN-002',
        woNumber: 'WO-1002',
        operatorCount: 2,
        standardTime: 450,
        status: 'Partial',
      },
      {
        image: 'assets/products/prod3.jpg',
        productName: 'Product C',
        partNumber: 'PN-003',
        woNumber: 'WO-1003',
        operatorCount: 4,
        standardTime: 480,
        status: 'Selesai',
      },
    ];

    this.calculateSummary();
  }

  // === POPOVER PROFIL ===
  openPopover(ev: any) {
    this.popoverEvent = ev;
    this.isPopoverOpen = true;
  }

  closePopover() {
    this.isPopoverOpen = false;
  }

  lihatProfile() {
    this.closePopover();
    this.router.navigate(['/lihat-profil']);
  }

  logout() {
    this.closePopover();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
    alert('Anda telah logout.');
    this.router.navigate(['/login-smartpack']);
  }

  // === PERHITUNGAN RINGKASAN ===
  calculateSummary() {
    this.totalProduk = this.workOrders.length;
    this.selesaiProduk = this.workOrders.filter(
      (w) => w.status.toLowerCase() === 'selesai'
    ).length;
    this.totalMenit = this.workOrders.reduce(
      (sum, w) => sum + (w.standardTime || 0),
      0
    );
    this.totalJam = Math.floor(this.totalMenit / 60);
  }

  getWorkLimit(): number {
    return new Date().getDay() === 5 ? 430 : 480;
  }

  getWorkCardClass(): string {
    const limit = this.getWorkLimit();
    if (this.totalMenit < limit) return 'yellow';
    if (this.totalMenit === limit) return 'green';
    return 'red';
  }

  getStatusColor(status: string): string {
    const s = (status || '').toLowerCase();
    if (s === 'selesai') return 'success';
    if (s === 'proses') return 'warning';
    if (s === 'partial') return 'tertiary';
    return 'medium';
  }

  viewDetail(item: WorkOrder) {
    console.log('Melihat detail WO:', item);
  }

  startWork(item: WorkOrder) {
    console.log('Mulai pengerjaan WO:', item);
    localStorage.setItem('produkDipilih', JSON.stringify(item));
    this.navCtrl.navigateForward('/form-laporan');
  }
}
