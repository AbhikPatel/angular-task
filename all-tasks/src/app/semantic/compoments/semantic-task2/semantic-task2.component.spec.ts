import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticTask2Component } from './semantic-task2.component';

describe('SemanticTask2Component', () => {
  let component: SemanticTask2Component;
  let fixture: ComponentFixture<SemanticTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
