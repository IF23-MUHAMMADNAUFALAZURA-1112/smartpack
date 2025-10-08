import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface SOPItem {
  image: string;
  partName: string;
  partNumber: string;
  type: string;
  dimension: {
    length: number;
    width: number;
    height: number;
  };
  limits: {
    upper: number;
    lower: number;
  };
  packingInstruction: string;
}

@Component({
  selector: 'app-smart-sop',
  templateUrl: './smart-sop.page.html',
  styleUrls: ['./smart-sop.page.scss'],
  standalone: false
})
export class SmartSopPage implements OnInit {
  searchTerm: string = '';
  selectedType: string = '';
  partTypes: string[] = ['Plastik', 'Metal', 'Karet', 'Karton'];

  sopItems: SOPItem[] = [
    {
      image: 'assets/img/part1.png',
      partName: 'Bracket Plastik',
      partNumber: 'BP-1001',
      type: 'Plastik',
      dimension: { length: 120, width: 80, height: 50 },
      limits: { upper: 125, lower: 115 },
      packingInstruction: 'Masukkan ke dalam tray biru dan bungkus plastik pelindung.'
    },
    {
      image: 'assets/img/part2.png',
      partName: 'Gear Besi',
      partNumber: 'GB-2304',
      type: 'Metal',
      dimension: { length: 75, width: 75, height: 30 },
      limits: { upper: 78, lower: 72 },
      packingInstruction: 'Lapisi dengan oli pelindung, simpan dalam kotak kayu.'
    }
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  filteredSOPs() {
    return this.sopItems.filter(item =>
      (item.partName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.partNumber.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedType === '' || item.type === this.selectedType)
    );
  }

  goBack() {
    this.navCtrl.back();
  }
}
