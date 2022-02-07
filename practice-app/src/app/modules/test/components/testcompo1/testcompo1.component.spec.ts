import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcompo1Component } from './testcompo1.component';

describe('Testcompo1Component', () => {
  let component: Testcompo1Component;
  let fixture: ComponentFixture<Testcompo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcompo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
