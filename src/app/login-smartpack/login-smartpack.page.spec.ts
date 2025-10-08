import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSmartpackPage } from './login-smartpack.page';

describe('LoginSmartpackPage', () => {
  let component: LoginSmartpackPage;
  let fixture: ComponentFixture<LoginSmartpackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSmartpackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
