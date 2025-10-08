import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartNotifikasiPage } from './smart-notifikasi.page';

describe('SmartNotifikasiPage', () => {
  let component: SmartNotifikasiPage;
  let fixture: ComponentFixture<SmartNotifikasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartNotifikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
