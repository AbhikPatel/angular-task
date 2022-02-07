import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCurrencyComponent } from './data-currency.component';

describe('DataCurrencyComponent', () => {
  let component: DataCurrencyComponent;
  let fixture: ComponentFixture<DataCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
