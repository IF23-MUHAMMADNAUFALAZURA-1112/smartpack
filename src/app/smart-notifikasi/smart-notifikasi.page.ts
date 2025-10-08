import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Notification {
  title: string;
  message: string;
  time: Date;
  read: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-smart-notifikasi',
  templateUrl: './smart-notifikasi.page.html',
  styleUrls: ['./smart-notifikasi.page.scss'],
  standalone: false
})
export class SmartNotifikasiPage {
  notifications: Notification[] = [
    { title: 'Work Order', message: 'WO-123 baru saja diterima.', time: new Date(), read: false },
    { title: 'Laporan Produksi', message: 'Laporan harian berhasil dikirim.', time: new Date(), read: true },
    { title: 'Maintenance Mesin', message: 'Mesin A selesai diperiksa.', time: new Date(), read: false },
  ];

  selectionMode = false;

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  onLongPress(notif: Notification) {
    this.selectionMode = true;
    notif.selected = true;
  }

  toggleSelection(notif: Notification) {
    if (this.selectionMode) notif.selected = !notif.selected;
    else notif.read = true;
  }

  markSelectedAsRead() {
    this.notifications.forEach((n) => {
      if (n.selected) n.read = true;
      n.selected = false;
    });
    this.selectionMode = false;
  }
pressTimer: any;

startPress(notif: Notification) {
  this.pressTimer = setTimeout(() => {
    this.onLongPress(notif);
  }, 600); // Tekan 600ms untuk aktif
}

cancelPress() {
  clearTimeout(this.pressTimer);
}

  deleteSelected() {
    this.notifications = this.notifications.filter((n) => !n.selected);
    this.selectionMode = false;
  }

  cancelSelection() {
    this.notifications.forEach((n) => (n.selected = false));
    this.selectionMode = false;
  }
}
