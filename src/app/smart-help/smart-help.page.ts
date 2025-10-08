import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-smart-help',
  templateUrl: './smart-help.page.html',
  styleUrls: ['./smart-help.page.scss'],
  standalone: false
})
export class SmartHelpPage {
  // nomor di-mask seperti “08xx…xxx”
  contactMasked = '08xx xxxx xxxx';

  // atau kamu bisa menyimpan nomor penuh di private, tapi untuk tampilan gunakan yang disamarkan
  private fullContact = '083804283745';

  constructor(private navCtrl: NavController) {}

  openWhatsApp() {
    // ketika ditekan, buka WhatsApp dengan nomor penuh
    const phone = this.fullContact;
    // format URL WhatsApp: https://wa.me/<no tanpa + dan 0 (misalnya 628...)>
    // Jika nomor Indonesia +62, kamu ubah leading 0 jadi 62
    const waNumber = phone.startsWith('0')
      ? '62' + phone.substring(1)
      : phone;
    const url = `https://wa.me/${waNumber}`;
    window.open(url, '_blank');
  }

  goBack() {
    this.navCtrl.back();
  }
}
