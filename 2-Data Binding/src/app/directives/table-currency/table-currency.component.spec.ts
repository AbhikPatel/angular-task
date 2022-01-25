import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCurrencyComponent } from './table-currency.component';

describe('TableCurrencyComponent', () => {
  let component: TableCurrencyComponent;
  let fixture: ComponentFixture<TableCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
