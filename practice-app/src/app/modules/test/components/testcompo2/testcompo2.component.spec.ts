import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcompo2Component } from './testcompo2.component';

describe('Testcompo2Component', () => {
  let component: Testcompo2Component;
  let fixture: ComponentFixture<Testcompo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcompo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
