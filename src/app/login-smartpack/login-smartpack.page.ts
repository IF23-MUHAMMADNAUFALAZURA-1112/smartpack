import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-smartpack',
  templateUrl: './login-smartpack.page.html',
  styleUrls: ['./login-smartpack.page.scss'],
  standalone: false
})
export class LoginSmartpackPage {
  
  credentials = {
    nik: '',
    password: ''
  };

  isLoading: boolean = false;
  showPassword: boolean = false;

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.isLoading = true;
    console.log('Login dengan data:', this.credentials);
    setTimeout(() => {
      this.isLoading = false;
      alert('Login sukses (simulasi)');
    }, 2000);
  }

  // ✅ Fungsi baru untuk navigasi ke halaman lupa password
  goForgot() {
    this.navCtrl.navigateForward('/smart-forgot');
  }
}
