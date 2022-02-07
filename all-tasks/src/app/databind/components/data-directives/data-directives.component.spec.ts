import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDirectivesComponent } from './data-directives.component';

describe('DataDirectivesComponent', () => {
  let component: DataDirectivesComponent;
  let fixture: ComponentFixture<DataDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
