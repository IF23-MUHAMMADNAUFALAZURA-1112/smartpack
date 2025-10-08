import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartForgotPage } from './smart-forgot.page';

describe('SmartForgotPage', () => {
  let component: SmartForgotPage;
  let fixture: ComponentFixture<SmartForgotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartForgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
