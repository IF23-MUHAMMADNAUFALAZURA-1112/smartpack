import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BtnNavigationbarComponent } from './btn-navigationbar.component';

describe('BtnNavigationbarComponent', () => {
  let component: BtnNavigationbarComponent;
  let fixture: ComponentFixture<BtnNavigationbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BtnNavigationbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
