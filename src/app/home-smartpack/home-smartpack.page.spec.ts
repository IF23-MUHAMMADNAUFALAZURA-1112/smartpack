import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSmartpackPage } from './home-smartpack.page';

describe('HomeSmartpackPage', () => {
  let component: HomeSmartpackPage;
  let fixture: ComponentFixture<HomeSmartpackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSmartpackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
