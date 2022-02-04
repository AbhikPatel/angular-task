import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticTask1Component } from './semantic-task1.component';

describe('SemanticTask1Component', () => {
  let component: SemanticTask1Component;
  let fixture: ComponentFixture<SemanticTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
