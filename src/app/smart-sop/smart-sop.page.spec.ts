import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSopPage } from './smart-sop.page';

describe('SmartSopPage', () => {
  let component: SmartSopPage;
  let fixture: ComponentFixture<SmartSopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
