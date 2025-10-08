import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-smart-registrasi',
  templateUrl: './smart-registrasi.page.html',
  styleUrls: ['./smart-registrasi.page.scss'],
  standalone: false,
})
export class SmartRegistrasiPage {
  user = {
    nama: '',
    nik: '',
    email: '',
    no_whatsapp: '',
    no_telepon: '',
    alamat: '',
    password: '',
    password_confirmation: '',
    foto: '',
  };

  selectedImageUrl: string | null = null;
  showPassword = false;
  showConfirmPassword = false;
  platformNote = ''; // untuk teks di bawah upload box

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    const platform = Capacitor.getPlatform();
    this.platformNote =
      platform === 'android' || platform === 'ios'
        ? '*Klik untuk ambil foto atau pilih dari galeri'
        : '*Klik untuk unggah foto dari komputer (jpg/png, maks 5MB)';
  }

  goBack() {
    this.navCtrl.back();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Trigger upload otomatis: kamera di mobile, file picker di browser
  async triggerUpload() {
    const platform = Capacitor.getPlatform();

    if (platform === 'android' || platform === 'ios') {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt, // kamera atau galeri
        });

        if (image?.dataUrl) {
          this.selectedImageUrl = image.dataUrl;
          this.user.foto = image.dataUrl;
        }
      } catch (error) {
        console.warn('User batal memilih foto:', error);
      }
    } else {
      const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
      if (fileInput) fileInput.click();
    }
  }

  handleFileUpload(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImageUrl = reader.result as string;
      this.user.foto = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  async submitForm() {
    if (
      !this.user.nama ||
      !this.user.nik ||
      !this.user.email ||
      !this.user.no_whatsapp ||
      !this.user.no_telepon ||
      !this.user.alamat ||
      !this.user.password ||
      !this.user.password_confirmation ||
      !this.user.foto
    ) {
      const alert = await this.alertCtrl.create({
        header: 'Peringatan',
        message: 'Harap lengkapi semua data dengan benar!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const nikPattern = /^[A-Z]{3}\d{2}-\d{4}$/;
    if (!nikPattern.test(this.user.nik)) {
      const alert = await this.alertCtrl.create({
        header: 'Peringatan',
        message: 'Format NIK harus seperti contoh: CII28-0021',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    if (this.user.password !== this.user.password_confirmation) {
      const alert = await this.alertCtrl.create({
        header: 'Peringatan',
        message: 'Konfirmasi password tidak sesuai!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const successAlert = await this.alertCtrl.create({
      header: 'Sukses',
      message: 'Registrasi berhasil! Silakan login.',
      buttons: ['OK'],
    });
    await successAlert.present();

    this.navCtrl.navigateRoot('/login');
  }
}
