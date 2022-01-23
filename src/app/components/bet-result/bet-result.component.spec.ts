import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetResultComponent } from './bet-result.component';

describe('BetResultComponent', () => {
  let component: BetResultComponent;
  let fixture: ComponentFixture<BetResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
