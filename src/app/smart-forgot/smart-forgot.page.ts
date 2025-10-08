import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-smart-forgot',
  templateUrl: './smart-forgot.page.html',
  styleUrls: ['./smart-forgot.page.scss'],
})
export class SmartForgotPage {
  email: string = '';
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  async submitForgotPassword() {
    if (!this.email || !this.email.includes('@')) {
      this.showAlert('Masukkan email yang valid', 'danger');
      return;
    }

    this.isLoading = true;

    try {
      // === Dummy response sementara, karena backend belum ada ===
      const fakeResponse = await new Promise((resolve) => {
        setTimeout(() => resolve({ success: true }), 1200); // simulasi delay
      });

      // Nanti aktifkan kalau Laravel sudah siap
      // const response = await this.http.post(`${environment.apiUrl}/forgot-password`, { email: this.email }).toPromise();

      this.isLoading = false;
      this.showAlert(
        'Link reset telah dikirim ke email Anda. (simulasi dummy)',
        'success'
      );
    } catch (error) {
      this.isLoading = false;
      this.showAlert('Terjadi kesalahan, coba lagi nanti.', 'danger');
    }
  }

  async showAlert(message: string, color: string) {
    const alert = await this.alertCtrl.create({
      header: 'Pemberitahuan',
      message: message,
      buttons: [
        {
          text: 'Tutup',
          role: 'cancel',
        },
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}
