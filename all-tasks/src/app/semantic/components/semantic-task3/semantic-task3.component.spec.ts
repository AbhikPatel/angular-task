import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticTask3Component } from './semantic-task3.component';

describe('SemanticTask3Component', () => {
  let component: SemanticTask3Component;
  let fixture: ComponentFixture<SemanticTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticTask3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
