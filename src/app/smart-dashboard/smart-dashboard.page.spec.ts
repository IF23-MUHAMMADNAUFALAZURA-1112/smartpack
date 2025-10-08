import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartDashboardPage } from './smart-dashboard.page';

describe('SmartDashboardPage', () => {
  let component: SmartDashboardPage;
  let fixture: ComponentFixture<SmartDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
