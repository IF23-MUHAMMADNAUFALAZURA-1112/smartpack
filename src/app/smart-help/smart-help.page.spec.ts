import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartHelpPage } from './smart-help.page';

describe('SmartHelpPage', () => {
  let component: SmartHelpPage;
  let fixture: ComponentFixture<SmartHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
