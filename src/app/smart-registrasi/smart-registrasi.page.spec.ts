import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartRegistrasiPage } from './smart-registrasi.page';

describe('SmartRegistrasiPage', () => {
  let component: SmartRegistrasiPage;
  let fixture: ComponentFixture<SmartRegistrasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartRegistrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
