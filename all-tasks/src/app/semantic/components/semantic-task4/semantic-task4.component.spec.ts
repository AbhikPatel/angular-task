import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticTask4Component } from './semantic-task4.component';

describe('SemanticTask4Component', () => {
  let component: SemanticTask4Component;
  let fixture: ComponentFixture<SemanticTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticTask4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
